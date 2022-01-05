import React, {useState} from 'react';
import {View} from 'react-native';
import {RtcConfigure, GridVideo} from 'agora-rn-uikit/Components';
import {PropsContext} from 'agora-rn-uikit/Contexts';
import Controls from './src/Controls';

const App = () => {
  const [inCall, setCall] = useState(true);
  return inCall ? (
    <PropsContext.Provider
      value={{
        rtcProps: {appId: '<Agora App ID>', channel: 'test'},
        callbacks: {EndCall: () => setCall(false)},
      }}>
      <View>
        <RtcConfigure>
          <GridVideo />
          <Controls />
        </RtcConfigure>
      </View>
    </PropsContext.Provider>
  ) : (
    <View />
  );
};

export default App;
