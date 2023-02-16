import * as cloudFunctions from "./cloud-functions";

export const sendMailFunction = (data: Object) => {
    return cloudFunctions.httpsCallable(cloudFunctions.funtions, "sendMailFunction")(data);
}
