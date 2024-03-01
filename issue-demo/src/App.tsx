import { gql, useSubscription } from '@apollo/client';

const CurrentTime = gql`
  subscription CurrentTime {
    currentTime {
      unixTime
      timeStamp
    }
  }
`;

const CurrentCount = gql`
  subscription CurrentCount {
    currentCount {
      count
    }
  }
`;

function App() {
  const { data: timeData, error: timeError } = useSubscription(CurrentTime);
  const { data: countData, error: countError } = useSubscription(CurrentCount);
  if (timeError) console.log('error', timeError);
  if (countError) console.log('error', countError);
  return (
    <>
      <div>Time: {timeData?.currentTime?.timeStamp}</div>
      <div>Count: {countData?.currentCount?.count}</div>
    </>
  );
}

export default App;
