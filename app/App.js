import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Image,
  ActivityIndicator
} from 'react-native';
import { Camera } from 'expo-camera';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import Clarifai from 'clarifai'
const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);

// API KEYS AND API URLS
const CLARIFAY_KEY = "83e67f71dd034c60b784e4a050228303"
const apiUrl = 'https://api.nft.storage/upload';
const storageApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUyMkQzODI3RjUzM0IwRjkzMmUwZGQ5YjhDQTY1NzNCZDBGNDcyOWUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MTIxMDUyMjc0MCwibmFtZSI6ImRlbW8ifQ.2gT7maxJhiHD2e2EtaDIIlqSAb6meTWveph6ywPRe78'
const mintTo = '0x9441ED1089f0196BBbBf8bD096b9CA23500ca7Ba'

// Mobile NFT minting w/ NFT Storage
// https://twitter.com/jongan69/status/1519731810632146944?s=20&t=_-gxt_viiMMCvDw-2BuxLQ

export default function MobileMinting() {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [items, setItems] = useState(null);
  const [lastMint, setlastMint] = useState(false)
  const [aiData, setAiData] = useState('')
  const clarifai = new Clarifai.App({
      apiKey: CLARIFAY_KEY
    })

  useEffect(() => {
    onHandlePermission();
  }, []);

  const onHandlePermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType(prevCameraType =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };



  const onSnap = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.7 };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('NFT STORAGE IPFS UPLOAD: ', JSON.stringify(data))


      if (data) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        
        fetch(apiUrl, {
          method: 'POST',
          body: data,
          headers: {
            'Content-Type': 'image/*',
            'Authorization': `Bearer ${storageApiKey}`,
          },
        })
          .then(async response => {
            let data = await response.json();
            console.log('NFT STORAGE RESPONSE:', data)
            console.log('IPFS URL:', `ipfs://${data.value.cid}`)
            Alert.alert('Image IPFS CID: ',data.value.cid, ', Minting NFT...');

            if (data.value.cid) {
            process.nextTick = setImmediate // RN polyfill
            // Using dweb.link for AI to read faster, NFT still minted with ipfs:// url
            clarifai.models.predict(Clarifai.GENERAL_MODEL, `https://${data.value.cid}.ipfs.dweb.link`)
            .then(response => {
              const { concepts } = response.outputs[0].data

                if (concepts && concepts.length > 0) {
                  for (const prediction of concepts) {
                    if (prediction.name) {
                  // All Predictions should be logged
                  console.log('AI Reading: ', prediction.name)
                  setAiData(prediction.name)
                  // THIS API IS OUT OF MONEY, THE MINT WILL FAIL ON BACKEND
                  // EDIT, API needs to have higher gas limit
                      fetch('https://thirdweb-nextjs-minting-api.vercel.app/api/mint', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                          },
                        body: JSON.stringify({
                          "mintToAddress": mintTo,
                          "supply" : 1,
                          "message": prediction.name,
                          "metadata": {
                            "name": prediction.name,
                            "description": 'A Demo AINFT',
                            "image": `ipfs://${data.value.cid}`,
                            "external_url": `https://${data.value.cid}.ipfs.nftstorage.link`,
                            "uri": `https://${data.value.cid}.ipfs.dweb.link`,
                            "background_color": "",
                            "attributes": [
                                {
                                  "ai_reading": prediction.name,
                                  "trait_type": "DEMO"
                                }
                              ]
                          }
                        }),
                      })
                      setlastMint(true)
                      Alert.alert(`AI found ${prediction.name}, minted NFT!`);
                    } else {
                    // Anything else gets output as alert
                    Alert.alert('Bad NFT: ', prediction.name);
                    }

                  // if(prediction.name === 'no person') {
                  //    Alert.alert('AI NEEDS WORK: ', 'And so do I, please hire me <3');  
                  // }
                  return
                  }
                }
            })
            }
          })
          .catch(err => {
            Alert.alert('Error Uploading NFT');
            console.log(err);
          });

      }
    }
  };

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }

  return (

    <TouchableWithoutFeedback>
      <View style={styles.container}>

        <Camera
          ref={cameraRef}
          style={styles.container}
          type={cameraType}
          onCameraReady={onCameraReady}
          useCamera2Api={true}
        />

        <Text style={styles.status}> last ai nft: </Text>
            <>
            <View style={styles.container}>
          {isPreview && (
            <> 
            <View style={{ alignSelf: 'center', padding: '80%' }}>

            {!lastMint  && <>        
            <Text style={styles.minted}> Posting to IPFS with AI Data, please wait... </Text>
            <ActivityIndicator size="large" color="#00ff00"/>
            </>}

            </View>

            <TouchableOpacity
              onPress={cancelPreview}
              style={styles.closeButton}
              activeOpacity={0.7}
            >
              <AntDesign name='close' size={32} color='#fff' />
            </TouchableOpacity>
            </>
          )}

          {!isPreview && (
            <View style={styles.bottomButtonsContainer}>
              <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
                <MaterialIcons name='flip-camera-ios' size={28} color='white' />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                disabled={!isCameraReady}
                onPress={onSnap}
                style={styles.capture}
              />
            </View>
          )}

        </View>
            <Text style={styles.notMinted}>{lastMint != false ? `${aiData}` : 'null'}</Text>
            </>

      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  status : {
    color: 'white',
    top: '80%',
  },
  // minted: {
  //   color: 'green',
  //   position: 'center',
  //   flexDirection: 'row',
  //   bottom: 80,
  //   padding: 20,
  //   width: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
    notMinted: {
    color: 'red',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 80,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomButtonsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: 35,
    right: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5A45FF',
    opacity: 0.7
  },
  capture: {
    backgroundColor: '#5A45FF',
    height: CAPTURE_SIZE,
    width: CAPTURE_SIZE,
    borderRadius: Math.floor(CAPTURE_SIZE / 2),
    marginBottom: 28,
    marginHorizontal: 30
  }
});
