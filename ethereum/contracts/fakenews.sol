    pragma solidity ^0.4.25;
    pragma experimental ABIEncoderV2;
    
    contract allTopics {
        topicStruct[] public deployedTopics;
        uint public totalTopics;
        address public contractOwner; 
        
        struct topicStruct {  
            address topicOwner;
            string topicName; 
        }
    
        constructor () public {
            contractOwner = msg.sender;
        }
    
        function createTopic(uint _minimumReward, string memory _topicName) public {
            topicStruct memory newTopic;
            newTopic.topicOwner = new fakenews(_minimumReward, msg.sender);
            totalTopics = totalTopics + 1; 
            newTopic.topicName = _topicName;
            deployedTopics.push(newTopic);
        }
    
        function getDeployedTopics() public view returns (topicStruct[]) {
            return deployedTopics;
        }
    
        function getTopicsCount() public view returns (uint) {
            return deployedTopics.length;
        }
    }
    
    contract fakenews {
        address public manager;
        uint public rewardValue; 
        newsStruct[] public news;
        uint public newsCount;
        address[] public all_raters;
        
        
        struct newsStruct {  
            address userAddress; 
            string newsText;
            uint newsScore; // This holds value of 1 for fake news and 2 for truthful news 
            bool complete;  // This news topic is already rewarded 
            uint sumTotalRating; // Total score till now 
            uint totalRatings; // Total ratings 
            mapping(address => uint) raters; 
        }
    
        constructor (uint _minimumReward, address _topicOwner) public {
            manager = _topicOwner;
            rewardValue = _minimumReward;
            //contractOwner.transfer(msg.value);
        }
        
        function createNews(string _newsText, address _user) public {
        // Before doing anything on Blockchain perform code to check for duplicate reviews 
        newsStruct memory newNewsStory = newsStruct({
            userAddress: _user,
            newsText: _newsText,
            newsScore: 0,
            complete: false, 
            totalRatings: 0, 
            sumTotalRating: 0
        });
        
        news.push(newNewsStory);
            
        }
    
        function getTopicSummary() public view returns (uint, uint, address) {
            return (
                rewardValue,
                news.length,
                manager
                );
        }
        
        function getNewsCount() public view returns (uint) {
            return news.length;
        }
    }
