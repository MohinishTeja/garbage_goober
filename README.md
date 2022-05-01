
## Getting started

1.  `git clone https://github.com/MohinishTeja/dragon_hacks`
2.  `sudo pip3 install -r requirements.txt`
3.  in Command line: `export FLASK_APP=waste_app.py`
4.  Try: `printenv FLASK_APP`
5.  Output: `waste_app.py`
6. `flask run`



<p align="center">


  <h1 align="center">Garbage Goober Rewards</h1>

  <p align="center">
    Decentralised reward distribution for Waste Management using Blockchain & AI.
    <br />
    <a href="https://github.com/MohinishTeja/dragon_hacks"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">Video Demo</a>
    ·
    <a href="#">View DApp</a>
  </p>
</p>

# Table of Contents
* [Team Members](#team-members)
* [Inspiration](#a)
* [What it does](#b)
* [How we built it](#c)
* [Challenges](#d)
* [Accomplishments](#e)
# <a name="team-members"></a>Team Members
* P.Mohinish Teja - <>
* Jonathan Gan - <>
* 


# <a name="a"></a>Inspiration
&nbsp; &nbsp; &nbsp; &nbsp;Landfills are one of the largest producers of Methane and 
house gases. Even power generation from Waste produces CO2. Why is it a big problem? It is because of no proper way in dumping. All kind of wastes are dumped which leads to half degrading and pollution of local resources.Dumping of huge amount of waste also causes soil contamination,Water contamination,Air contamination and causes harm for marine and animal life. 

&nbsp; &nbsp; &nbsp; &nbsp;What if we segregate biodegradable wastes and recycle other ones? This can drastically cut down new production of plastics and safe degradation of all other kinds of wastes. But how do we **motivate** people to dump according to our waste management system? This is where Garbage Goober Rewards comes into action. Garbage Goober Rewards is a Decentralized Application that automatically rewards people who dump waste categorically.


 <p align="center">
 <img src="templates/Screenshot (1407).png" height="60%" width="60%">
  </p>
  
  
# <a name="b"></a> What it does
&nbsp; &nbsp; &nbsp; &nbsp;**Garbage Goober Rewards** rewards people after dumping waste categorically. Payment is governed by Smart Contract which ensures guaranteed, safe and quick reward payment to users. Deep Learning model integrated determines type of waste automatically. Huge dataset of over 2,200 images stored in IPFS is used to train and test the model. The entire application is deployed through IPFS which ensures safe, quick and lower downtime of application.
  - AI/ML      - To determine the type of waste
  - Blockchain - To distribute rewards

&nbsp; &nbsp; &nbsp; &nbsp;People should get rewards instantly and should be of some value. We can't provide much rewards in traditional currencies. So we have used Crypto Tokens as rewards. Value of these tokens are volatile and may be of higher value in future. Government can provide regular services like Registrations, application fee, fine payment using these tokens. This can definitely drive people to use this DApp(Decentralized application).
  - Velas - Layer-2 network which is fast and scalable for Garbage Goober Rewards
  - IPFS    - To store dataset of images for CNN model

<p align="center">
 <img src="templates/Screenshot (1408).png" height="60%" width="60%">
 </p>
  

# <a name="c"></a> How we built it
&nbsp; &nbsp; &nbsp; &nbsp;We have built this DApp as Web App. Entire frontend is built using HTML,CSS,JS. Smart contracts are written using Solidity and deployed on Velas network. Velas network helps us in Reduced gas fee and faster transactions. Frontend and Smart contracts are connected using Web3.JS. Convoultional Neural Network is used for determining type of waste instantly with just a picture. It has accuracy of 83% at present with dataset of 2,200+ images in IPFS. This entire DApp is published through IPFS using Fleek platform. IPFS helps us in maintaining large sets of Data with more security features like no redundancy.
  - Flask   - To integrate CNN model to Frontend
  - Web3.js - To connect Smart Contracts with Frontend

# <a name="d"></a> Challenges we ran into
&nbsp; &nbsp; &nbsp; &nbsp;Initially we thought of deploying this application using Rinkeby test network of Ethereum and it lead to higher gas fee and slower transactions. Then we switched to Solana based solution like Velas. Though it was easy to switch we encountered difficulties in integrating it with Frontend. After further reading Web3.JS  and velas docs we found the solution. Further we realized that as this DApp grows we'll be having lot of data to handle. IPFS came to our rescue. We've used Fleek platform to publish DApp on IPFS. Image classification and other predicting models need Multimedia data to predict what kind of waste and how much of it is deposited. IPFS helped us handle these situations.

# <a name="e"></a> Accomplishments that we're proud of
&nbsp; &nbsp; &nbsp; &nbsp;We are proud of the entire project development and its execution as per timeline set. Initially we did not think of scalability issues with Data as users grow for this DApp. So, we went through some resources and successfully published using it. We are proud of learning about new tech and using it in a very short period of time.


 <p align="center">
 <img src="#" height="60%" width="60%">
  </p>
  
## What we learned
&nbsp; &nbsp; &nbsp; &nbsp;We learned about Decentralization and its benefits. Central authority can never be fool proof and projects should inculcate some kind of decentralization or distribution. We learned about Layer-2 solutions for Ethereum and its uses. Inter Planetary File System deployment taught us a lot. 
## What's next for Garbage Goober Reward
&nbsp; &nbsp; &nbsp; &nbsp;Right now user manually enters weight of waste. Type of waste is classified by uploading a picture of the waste. This is not the right way for production level implementation. Users will take advantage of this easily. We are thinking of using OpenCV to detect and determine type of waste in real time without any human intervention. This cannot be done due to time constraints for the hackathon. As these features will be integrated data plays important role and we will be using OpenCV & IPFS efficiently in upcoming versions.
<p align="center">
 <img src="#" height="60%" width="60%">
  </p>
  <p align="center">
 <img src="#" height="60%" width="60%">
  </p>
  
