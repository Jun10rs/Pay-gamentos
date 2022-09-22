import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#15BF81",
  },
 
  container: {
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    color: "#F2295F",
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 30,
  },

  boxButton: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },

  buttonInitial: {
    width: "70%",
    height: 60,
    backgroundColor: "#131426",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 10,
  },

  buttonForm: {
    width: "45%",
    height: 50,
    backgroundColor: "#131426",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderRadius: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight:'bold'

  },

  logo: {
    color: "#FFDE59",
  },

  input: {
    width: "80%",
    height: 50,
    borderColor: "#131426",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    color: '#FFF'
  },

  inputText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 42,
    marginBottom: 5,
    color: "#424242",
    alignSelf: "flex-start",
  },

 
});
