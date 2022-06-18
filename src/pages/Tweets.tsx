import { useState } from 'react';
import { Tweet } from '../components/Tweet';

export function Tweets() {
    const [tweets, setTweets] = useState<string[]>([
        'Tweet 1',
        'Tweet 2',
        'Tweet 3',
        'Tweet 4'
      ]);
    
      function createTweet() {
        setTweets([...tweets, `Tweet ${tweets.length+1}`]);
      }
    
      return (
        <div>
          {tweets.map(tweet => { return <Tweet text={tweet}/> })}
    
          <button 
            onClick={createTweet}
            style={
              {
                color: 'white',
                border: 0,
                padding: '6px 12px',
                backgroundColor: '#8257e6'
              }
            }
          >
            Adicionar tweet
          </button>
        </div>
      );
}