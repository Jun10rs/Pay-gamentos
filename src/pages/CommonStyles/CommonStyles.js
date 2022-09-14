import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    color: "#5882FA",
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 20,
  },

  buttonInitial: {
    width: "60%",
    height: 50,
    backgroundColor: "#5882FA",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 20,
  },

  logo: {
    color: "#FFDE59",
  },

  input: {
    width: "80%",
    height: 50,
    borderColor: "#5882FA",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
});
