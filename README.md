
## Getting started


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
    <a href="https://youtu.be/kkXdOf3BB2s">Video Demo</a>
    ·
    <a href="https://mohinishteja.github.io/garbage_goober/">View DApp</a>
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
* P.Mohinish Teja - <marvelmohinish99@gmail.com>
* Jonathan Gan - <Jonathangan@usf.edu>
* 


# <a name="a"></a>Inspiration
&nbsp; &nbsp; &nbsp; &nbsp;Landfills are one of the largest producers of Methane and 
house gases. Even power generation from Waste produces CO2. Why is it a big problem? It is because of no proper way in dumping. All kind of wastes are dumped which leads to half degrading and pollution of local resources.Dumping of huge amount of waste also causes soil contamination,Water contamination,Air contamination and causes harm for marine and animal life. 

People get incentives for doing the right thing! These later can be regular habits and greatly saves atmosphere thus promoting sustainability. Rewards distributed are through Cryptocurrency from a decentralized application. Garbage thus collected categorically can be **Reused, Recycled** which can fund back the reward distribution process thus making this a circular economy without any burden on reward paying organization.

This will be a great and efficient **Learning experience for Users** as they can see the **amount of Carbon they offset** by disposing waste categorically thus habituating them psychologically to understand and follow green practices in every possible way in their day to day life.

  
  
# <a name="b"></a> What it does
&nbsp; &nbsp; &nbsp; &nbsp;**Garbage Goober Rewards** rewards people after dumping waste categorically. Payment is governed by Smart Contract which ensures guaranteed, safe and quick reward payment to users. Deep Learning model integrated determines type of waste automatically. Huge dataset of over 2,200 images stored in IPFS is used to train and test the model. The entire application is deployed through IPFS which ensures safe, quick and lower downtime of application.
  - AI/ML      - To determine the type of waste
  - Blockchain - To distribute rewards

These cover almost all areas of the world without any technological or logistical barriers like access to no computers. Mobile App is thus built to cater people who don't have access to better hardware.

We have started out with a flask app for classifying types of waste. Later we decided to implement a better front end experience and Web3 functionality that would allow user to get paid using Web3. We have used Polygon network which is L2 network based on Ethereum. This blockchain is so energy neutral that most of it is powered through alternate energy resources. Single transaction uses only 1/20th of power used by a LED bulb per minute thus not putting any more burden/polluting the environment.

Latest technologies like Deep Learning for Waste classification, Blockchain for Reward payout and mobile,web applications ensure the application rewards to only correct waste disposals.
  

# <a name="c"></a> How we built it
&nbsp; &nbsp; &nbsp; &nbsp;We have built this DApp as Web App. Entire frontend is built using HTML,CSS,JS. Smart contracts are written using Solidity and deployed on Polygon network. Polygon network helps us in Reduced gas fee and faster transactions. Frontend and Smart contracts are connected using Web3.JS. Convoultional Neural Network is used for determining type of waste instantly with just a picture. It has accuracy of 83% at present with dataset of 2,200+ images in IPFS. This entire DApp is published through IPFS using Fleek platform. IPFS helps us in maintaining large sets of Data with more security features like no redundancy.
  - Flask   - To integrate CNN model to Frontend
  - Web3.js - To connect Smart Contracts with Frontend

# <a name="d"></a> Challenges we ran into
&nbsp; &nbsp; &nbsp; &nbsp;Initially we thought of deploying this application using Rinkeby test network of Ethereum and it lead to higher gas fee and slower transactions. Then we switched to L2 based solution like Polygon. Though it was easy to switch we encountered difficulties in integrating it with Frontend. After further reading Web3.JS  and Polygon docs we found the solution. Further we realized that as this DApp grows we'll be having lot of data to handle. IPFS came to our rescue. We've used Fleek platform to publish DApp on IPFS. Image classification and other predicting models need Multimedia data to predict what kind of waste and how much of it is deposited. IPFS helped us handle these situations. NFT's minted are stored in IPFS.

# <a name="e"></a> Accomplishments that we're proud of
- Multi-chain contract
- MVP Mobile App
- Web App deployed in a fast and low fee blockchain network.
  
## What we learned
- To work cohesively even though we're both remote.
- Manage work load equally even though both of us had different skill sets.
- Lot of knowledge on CO2 emissions and rates at which it is increasing and sources of it.
## What's next for Garbage Goober Reward
&nbsp; &nbsp; &nbsp; &nbsp;Right now user manually enters weight of waste. Type of waste is classified by uploading a picture of the waste. This is not the right way for production level implementation. Users will take advantage of this easily. We are thinking of using OpenCV to detect and determine type of waste in real time without any human intervention. This cannot be done due to time constraints for the hackathon. As these features will be integrated data plays important role and we will be using OpenCV & IPFS efficiently in upcoming versions.
  
