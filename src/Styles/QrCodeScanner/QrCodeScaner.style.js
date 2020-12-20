import { StyleSheet } from "react-native";
const QrCodeScannerStyle = StyleSheet.create({

    topContentContainer: { 
        width: "100%", 
        alignItems: "center", 
        flexDirection: "row", 
        justifyContent: "space-between", 
        padding: 20, 
        marginTop: 30 
    },
   bottomContentContainer:{
        alignItems: "center" 
    },
    topViewStyle: {
        position: "absolute",
        zIndex: 1
    },
    bottomViewStyle:{
        position: "absolute",
        bottom: 30
    },
    refreshButton: {
        padding: 15,
       
    },
    warningContainer:{
        flexDirection: "row", 
        alignItems: "center"
    },
    warningText:{ 
        marginLeft: 5, 
        color: "#fff" }
});
export { QrCodeScannerStyle }