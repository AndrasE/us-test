import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          }
        }>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white, 
          }}>
          <Section title="Allo Sarahschnut! 👋">
            <Text style={styles.text}>The ❄️ 🌟 🔦 ⚪ on the mountain 🌙 🌠. 🙅🏻 a👣 to 🐝 👀. A 🏰 of 😢, and it 👀 like☝️️ the 👑. The 💨 is 🐺 like this 🌀 ❄️ ☔️ 🏠. 🙅🏻 keep it in, ☁️ 💡 ☝️️ tried. 🙅🏻 let 👬👫 in,🙅🏻 let 👬👫 👀. 🐝 the 👍 👧 👇 always have to 🐝. 🙅🏻, don't 👐, 🚫 let 👬👫💡. Well now 👬👫 💡. 👐 it 🚗,, 👐 it 🚗,,🙅🏻 ✊ it back anymore. 👐 it 🚗,, 👐 it 🚗, turn ✈️ and 🔨 the 🚪. ☝️️ 🚫 care, what 👬👫 going to 👄, let the ☔️ ⚡ ❄️ 😡 on, the ❄️ ⛄️ 🙅🏻 bothered ☝️️ anyway. It's 😜😂 how some ✈️ 🚆 makes everything 😳 🐜. And the 😱 that once 👮 me, 🙅🏻 get to☝️️ at all. It's 🕓 to 👀 what☝️️ can do. To 📝 the 📊 and 🔨 through. 🚫 👍 , 🚫 👎, 🚫 👮 for ☝️️. ☝️️ 🏃. 👐 it 🚗,, 👐 it 🚗., ☝️️ am ☝️ with the 🌀 and 🌌. 👐 it 🚗,, 👐 it 🚗..👇 🙅🏻 👀 ☝️️ 😭 . 👉 ☝️️ 🚶, and 👉 ☝️️ stay. Let the⚡ ❄️ 😡 on. ☝️️ 💪 ❄️ through the 🌀 into the 🌎.☝️️ 👤 is 🌀 in ❄️ ⛄️ fractals all 🔁. And 1️⃣💡 💎 like an ❄️ 📢. ☝️️ 🙅🏻 🏃 back, the past is in the past. 👐 it 🚗,,👐 it 🚗,. And ☝️️ 🚀 like the 💔 of 🌌. 👐 it 🚗,, 👐 it 🚗.. That 💁 is 🚫. Here ☝️️ 🚶, in the 🔦 of ☀️. Let the ⚡ ❄️ 😡 on, the ❄️ ⛄️ 🙅🏻 bothered ☝️️ anyway.</Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: "10%",
    height: 744,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 44,
    fontWeight: '600',
  },
  text: {
    fontSize: 18,
  }
});

export default App;
