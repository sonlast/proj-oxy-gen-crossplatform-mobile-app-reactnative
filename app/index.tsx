import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Animated from "react-native-reanimated";

export default function Index() {
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(4);

  const countDown = () => {
    let interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(interval);
          setClick(false);
          return 4;
        } else {
          prevCount <= 1 && clearInterval(interval);
          return prevCount - 1;
        }
      })
    }, 1000);
    return () => clearInterval(interval);
  };

  return (
    <View
      style={styles.container}
    >
      <TouchableHighlight style={[
        styles.button,
        {
          paddingVertical: click ? 140 : 115,
          backgroundColor: click ? "#ff0000" : "#82888f",
        },
      ]}
        onPress={() => {
          setClick(!click);
          countDown();
        }}
        disabled={click ? true : false}
      >
        <Animated.View>
          {click
            ? <Text style={styles.insideText}>{count}</Text>
            : <Text style={[
              styles.insideText,
              {
                color: "#ffffff"
              }
            ]}>Start Breathing Exercise</Text>
          }
        </Animated.View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 95,
    borderRadius: 150,
    borderColor: "#000000",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  insideText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    width: 100,
    textAlign: "center"
  }
})

// CONTINUE (animation of countdown, vibration of device, font style)