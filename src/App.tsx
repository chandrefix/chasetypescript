import React, { useState, memo } from 'react';

export interface IColorfulGridProps {
}

export const ColorfulGrid = memo(function ColorfulGridApp({
}: IColorfulGridProps): JSX.Element {
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState('');
  const [todID, setTodID] = useState("");
  const [etcID, setEtcID] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [agency, setAgency] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [referenceId, setReferenceId] = useState("");
  const [state, setState] = useState({ key: 0, text: '' });
  const [country, setCountry] = useState({ key: 0, text: '' });
  const [zip, setZip] = useState({ key: 0, text: 'Please select' });

  const [paymentType, setPaymentType] = useState("creditCard");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [month, setMonth] = useState({ key: "0", text: '', value: "", label: "" });
  const [year, setYear] = useState({ key: "0", text: '', value: "", label: "" });
  const [payTypeCard, setPayTypeCard] = useState({
    "ReplinshmentGuid": "",
    "billingAddressLine1": "",
    "billingAddressLine2": "",
    "city": "",
    "state": "",
    "zipcode": "",
    "country": "",
    "type": "",
    "tokenNumber": "",
  });
  const [cardType, setCardType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [cardList, setCardList] = useState([]) as any;
  const [bearerToken, setBearerToken] = useState("");
  const [checkNumber, setCheckNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [achAccountNumber, setAchAccountNumber] = useState("");
  const [accountGuid, setAccountGuid] = useState("");
  const [stateList, setStateList] = useState([]);
  const [countryName, setCountryName] = useState([]);
  const [zipCode, setZipCode] = useState([]);
  const [oauthToken, setOauthToken] = useState("");
  const [validate, setValidate] = useState(true);
  const [addressValidate, setAddressValidate] = useState(true);
  const [validateAddressFields, setAalidateAddressFields] = useState(true);
  const [primaryCard, setPrimaryCard] = useState(false);
  const [recurringPayment, setRecurringPayment] = useState(false);
  const [addressType, setAddressType] = useState(false);
  const [suggestedAddress, setSuggestedAddress] = useState(false);

  const [enteredAddress1, setEnteredAddress1] = useState("");
  const [enteredAddress2, setEnteredAddress2] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredZipPlusCode, setEnteredZipPlusCode] = useState("");
  const [enteredState, setEnteredState] = useState({ key: 0, text: '' });
  const [enteredCountry, setEnteredCountry] = useState({ key: 0, text: '' });
  const [enteredZip, setEnteredZip] = useState({ key: 0, text: '', value: '', label: '', });


  const [suggestedAddress1, setSuggestedAddress1] = useState("");
  const [suggestedAddress2, setSuggestedAddress2] = useState("");
  const [suggestedCity, setSuggestedCity] = useState("");
  const [suggestedZipPlusCode, setSuggestedZipPlusCode] = useState("");
  const [suggestedState, setSuggestedState] = useState({ key: 0, text: '' });
  const [suggestedCountry, setSuggestedCountry] = useState({ key: 0, text: '' });
  const [suggestedZip, setSuggestedZip] = useState({ key: 0, text: '' });
  const [replenishmentCall, setReplenishmentCall] = useState(false);
  // const [invoiceList, setInvoiceList] = useState("");
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [isDeleteConfirmationModal, setIsDeleteConfirmationModal] = useState({
    isVisible: false,
    redord: {}
  });

  // const [fromAccountType, setFromAccountType] = useState("");
  // const [toAccountType, setToAccountType] = useState("");
  // const [primaryRebillType, setPrimaryRebillType] = useState("");
  // const [paymentViewTypeState, setPaymentViewTypeState] = useState("Invoice");
  // const [storeId, setStoreId] = useState("");
  // const [empId, setEmpId] = useState("");
  const [apiStatus, setApiStatus] = useState("loading");
  // const [apiStatus, setApiStatus] = useState("" || "success" || "error" || "loading");
  const [APIErrorMsg, setAPIErrorMsg] = useState("");
  const [validRoutingNumber, setValidRoutingNumber] = useState(false);
  const [iFrameKey, setIFrameKey] = useState(0);
  const [maskedRoutingNumber, setMaskedRoutingNumber] = useState("");
  const [disableValidateButton, setDisableValidateButton] = useState(false);
  const [userID, setUserID] = useState("");
  const [paymentSuccessMessage, setPaymentSuccessMessage] = useState("");
  const [containerHeight, setContainerHeight] = useState("");
  // const [creditCardImage, setCreditCardImage] = useState(discoveryCard);
  const [profileId, setProfileId] = useState("");
  const [replinshmentGuid, setReplinshmentGuid] = useState("");
  const [existingCreditCardToken, setExistingCreditCardToken] = useState("");
  const [isEditAddress, setIsEditAddress] = useState(true);
  const [validateErrorMessage, setValidateErrorMessage] = useState(false);
  const [addPaymentType, setAddPaymentType] = useState("");
  const [isActiveAddPaymentModal, setIsActiveAddPaymentModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isPrimaryDisabled, setIsPrimaryDisabled] = useState(false);
  const [editCardData, setEditCardData] = useState({}) as any;
  const [defaultAddress, setDefaultAddress] = useState({}) as any;
  const [billingAddressType, setBillingAddressType] = useState("");
  const [accountType, setAccountType] = useState("");
  // const [logOnModes, setLogOnModes] = useState([{}]);
  const [isDisabledCreditCard, setIsDisabledCreditCard] = useState(true);
  const [isDisabledACH, setIsDisabledACH] = useState(true);
  const [isDisabledCheck, setIsDisabledCheck] = useState(true);
  const [isDisabledCash, setIsDisabledCash] = useState(true);
  // const [isAchPrimary, setIsAchPrimary] = useState(false);
  const [disablePayment, setDisablePayment] = useState(false);
  const [UID, setUID] = useState("");
  const [creditCardUID, setCreditCardUID] = useState("");
  const [achUID, setAchUID] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [chaseProfileId, setChaseProfileId] = useState("");
  const [lastDigits, setLastDigits] = useState("");
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [hideShippingAddress, setHideShippingAddress] = useState(false);
  const [ppt, setppt] = useState(false);
  const [pptView, setpptView] = useState(false);
  const [addressIndicator, setAddressIndicator] = useState("");

  var context = {} as any

  // const [editIsPrimary, setEditIsPrimary] = useState(false);
  var todayFullDate = new Date();
  var fullYear = todayFullDate.getFullYear();
  var fullMonth = todayFullDate.getMonth() + 1;
  var lastDay = new Date(fullYear, fullMonth, 0).toString().split(" ")[2]

  const MonthList = [
    { key: "0", text: '', value: "", label: "" },
    { key: "1", text: '01', value: '01', label: '01' },
    { key: "2", text: '02', value: '02', label: '02' },
    { key: "3", text: '03', value: '03', label: '03' },
    { key: "4", text: '04', value: '04', label: '04' },
    { key: "5", text: '05', value: '05', label: '05' },
    { key: "6", text: '06', value: '06', label: '06' },
    { key: "7", text: '07', value: '07', label: '07' },
    { key: "8", text: '08', value: '08', label: '08' },
    { key: "9", text: '09', value: '09', label: '09' },
    { key: "10", text: '10', value: '10', label: '10' },
    { key: "11", text: '11', value: '11', label: '11' },
    { key: "12", text: '12', value: '12', label: '12' }
  ] as any;

  const yearList = [
    { key: "0", text: '', value: "", label: "" },
    // { key: "1", text: '2022', value: '2022', label: '2022' },
    { key: "2", text: '2023', value: '2023', label: '2023' },
    { key: "3", text: '2024', value: '2024', label: '2024' },
    { key: "4", text: '2025', value: '2025', label: '2025' },
    { key: "5", text: '2026', value: '2026', label: '2026' },
    { key: "6", text: '2027', value: '2027', label: '2027' },
    { key: "7", text: '2028', value: '2028', label: '2028' },
    { key: "8", text: '2029', value: '2029', label: '2029' },
    { key: "9", text: '2030', value: '2030', label: '2030' },
    { key: "10", text: '2031', value: '2031', label: '2031' },
    { key: "11", text: '2032', value: '2032', label: '2032' },
    { key: "12", text: '2033', value: '2033', label: '2033' }
  ] as any;

  // React.useEffect(() => {
  //     let allParameters = context.parameters?.parameters?.raw?.split(",")

  //     let amount = allParameters.filter((i: any) => i.includes("amount"))[0]?.split(":")[1]
  //     let todID = allParameters.filter((i: any) => i.includes("todID"))[0]?.split(":")[1]
  //     let etcID = allParameters.filter((i: any) => i.includes("etcID"))[0]?.split(":")[1]
  //     let accountNumber = allParameters.filter((i: any) => i.includes("accountNumber"))[0]?.split(":")[1]
  //     let agency = allParameters.filter((i: any) => i.includes("agency"))[0]?.split(":")[1]
  //     let referenceId = allParameters.filter((i: any) => i.includes("referenceId"))[0]?.split(":")[1]
  //     let containerHeight = allParameters.filter((i: any) => i.includes("containerHeight"))[0]?.split(":")[1]
  //     let userID = allParameters.filter((i: any) => i.includes("userID"))[0]?.split(":")[1]
  //     let pptView = allParameters.filter((i: any) => i.includes("pptView"))[0]?.split(":")[1]


  //     setAmount(amount);
  //     setTodID(todID);
  //     setEtcID(etcID);
  //     setAccountNumber(accountNumber);
  //     setAgency(agency);
  //     setReferenceId(referenceId);
  //     setContainerHeight(containerHeight)
  //     setUserID(userID)
  //     setpptView(pptView);

  //     window.addEventListener("message", function (event) {
  //         if (event.origin === "https://conduent-uat.cardconnect.com") {
  //             if (typeof (event.data) === "string") {
  //                 let data = JSON.parse(event.data);
  //                 if (data.message !== account && data.message !== undefined) {
  //                     switch (data.message?.charAt(1)) {
  //                         case "3": {
  //                             setCardType("AMEX");
  //                             setAccount(data.message);
  //                             setCreditCardImage(AMEXCard)
  //                         }
  //                             break;
  //                         case "4": {
  //                             setCardType("VISA");
  //                             setAccount(data.message);
  //                             setCreditCardImage(visaCard)
  //                         }
  //                             break;
  //                         case "5": {
  //                             setCardType("MASTERCARD");
  //                             setAccount(data.message);
  //                             setCreditCardImage(masterCardMini)
  //                         }
  //                             break;
  //                         case "6": {
  //                             setCardType("DISCOVER");
  //                             setAccount(data.message);
  //                             setCreditCardImage(discoveryCard)
  //                         }
  //                             break;
  //                     }
  //                 } else if (account && data.message === undefined && data.cardTyping === true) {
  //                     setCardType("");
  //                     setAccount("");
  //                 }
  //             } else {
  //                 setCardType("");
  //                 setAccount("");
  //             }
  //         } else if (account !== "" && event.origin === "https://conduent-uat.cardconnect.com" && typeof (event.data) !== "string") {
  //             setCardType("");
  //             setAccount("");
  //         }
  //     },
  //         false
  //     );
  // });

  // React.useEffect(() => {
  //     let allParameters = context.parameters?.parameters?.raw?.split(",")
  //     let CRMToken = allParameters.filter((i: any) => i.includes("CRMToken"))[0]?.split(":")[1]
  //     let accountNumber = allParameters.filter((i: any) => i.includes("accountNumber"))[0]?.split(":")[1]
  //     let PCFType = allParameters.filter((i: any) => i.includes("PCFType"))[0]?.split(":")[1];
  //     let accountGuid = allParameters.filter((i: any) => i.includes("accountGuid"))[0]?.split(":")[1]


  //     setOauthToken(CRMToken)
  //     getZipcode(CRMToken);
  //     getStateCode(CRMToken);
  //     getCountries(CRMToken);
  //     setAddPaymentType(PCFType);
  //     setAccountGuid(accountGuid)
  //     if (CRMToken && PCFType === "private" ? accountGuid : accountNumber) {

  //         tokengeneration(accountNumber, CRMToken, accountGuid);
  //     }
  // }, [context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("CRMToken"))[0]?.split(":")[1], context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("PCFType"))[0]?.split(":")[1] === "private" ? context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("accountGuid"))[0]?.split(":")[1] : context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("accountNumber"))[0]?.split(":")[1]])


  // Debugging code for Chase

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://chase-var.hostedpaymentservice.net/includes/hpfParent.min.js";
    script.async = false;
    script.onload = () => {
      setIsScriptLoaded(true);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  //payment default functions

  const handlePaymentErrors = (data: any) => {
    alert("postMessage function handlePaymentErrors is called. \nError: " + Object.values(data));
  }
  // function completePayment(data: any) {
  //     // alert("postMessage function completePayment is called. \n Response:" + Object.values(data));
  //     alert(data.token_id);
  // }
  const hpfReady = () => {
    console.log("HPF Form finished loading.");
  }
  const scrollRelay = (scrollX: any, scrollY: any) => {
    console.log("Scroll X: " + scrollX + "\nScroll Y: " + scrollY);
  }
  const startPayment = () => {
    console.log("Payment processing start.");
  }
  const cancelPayment = () => {
    alert("postMessage function cancelPayment is called. \n You have canceled the payment.");
  }

  const completePayment = (data: any) => {
    debugger
    console.log("completePayment")

  }
  // (window as any).completePayment = completePayment;

  const generateCCUID = async (token: string) => {
    let resultURl = await getURL(context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("CRMToken"))[0]?.split(":")[1], "CHI001") as any;

    setPaymentMethod("")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let APIURL = context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("URL"))[0].split(":")[1]
    // if (APIURL === "PERF") {
    //     myHeaders.append("Ocp-Apim-Subscription-Key", "3501fcd9b4e3418eb19e89556bc7ad0a");
    // } else {
    myHeaders.append("Authorization", "Bearer " + (token ? token : bearerToken));
    // }


    var raw = JSON.stringify({
      "secure_id": "chs180799227752SANDBOX",
      "api_key": "KLJLIQ1IrxwzpQJSRaJuLiKRKgaR8nWE",
      "txn_type": "profileAdd",
      "form_name": "chaseCreditCard"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    // fetch("https:///api-qa-tollingbos.services.conduent.com/chase/api/init", requestOptions as any)
    fetch(resultURl, requestOptions as any)
      .then(response => response.text()).then(async (result: any) => {
        let response = JSON.parse(result)
        // if (response?.message === "Unauthorized"){
        //     let JWTToken = await tokengeneration(accountNumber, context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("CRMToken"))[0]?.split(":")[1], false);
        //     generateCCUID()
        // }

        setCreditCardUID(response.uid);
        setIsLoading(false);
        setApiStatus("");
        setPaymentMethod("CC");
        (window as any).hpfReady = hpfReady;
        (window as any).completePayment = completePayment;
        (window as any).scrollRelay = scrollRelay;
        (window as any).handlePaymentErrors = handlePaymentErrors;
        (window as any).startPayment = startPayment;
        (window as any).cancelPayment = cancelPayment;


      })
      .catch(error => console.log('error', error));
  }

  const generateAchUID = async (token: string) => {
    let resultURl = await getURL(oauthToken, "CHI001") as any;
    setPaymentMethod("")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + (token ? token : bearerToken));

    var raw = JSON.stringify({
      "secure_id": "chs180799227752SANDBOX",
      "api_key": "KLJLIQ1IrxwzpQJSRaJuLiKRKgaR8nWE",
      "txn_type": "profileAdd",
      "form_name": "chaseACH"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    // fetch("https:///api-qa-tollingbos.services.conduent.com/chase/api/init", requestOptions as any)
    fetch(resultURl, requestOptions as any)
      .then(response => response.text()).then((result: any) => {
        setAchUID(JSON.parse(result).uid);
        setIsLoading(false);
        setApiStatus("");
        setPaymentMethod("ACH");
        (window as any).hpfReady = hpfReady;
        (window as any).completePayment = completePayment;
        (window as any).scrollRelay = scrollRelay;
        (window as any).handlePaymentErrors = handlePaymentErrors;
        (window as any).startPayment = startPayment;
        (window as any).cancelPayment = cancelPayment;
      })
      .catch(error => console.log('error', error));
  }

  const notifyOutputChangedFunction = (i: number, j: string) => {
    // if(i ===  j){

    // }
  }

  const getToken = async () => {
    let resultURl = await getURL(oauthToken, "CHQ001") as any;
    setIsLoading(true);
    setApiStatus("loading")
    var myHeaders = new Headers();
    let APIURL = context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("URL"))[0].split(":")[1]
    // if (APIURL === "PERF") {
    //     myHeaders.append("Ocp-Apim-Subscription-Key", "3501fcd9b4e3418eb19e89556bc7ad0a");
    // } else {
    myHeaders.append("Authorization", "Bearer " + bearerToken);
    // }
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "secure_id": "chs667360915090SANDBOX",
      "api_key": "bOigb0vtEwPpdepLeHfyH83qcAMROByr",
      "uid": paymentType === "ACH" ? achUID : creditCardUID
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    // fetch("https://api-qa-tollingbos.services.conduent.com/chase/api/query", requestOptions as any)
    fetch(resultURl, requestOptions as any)
      .then(response => response.text()).then((result: any) => {
        let resultData = JSON.parse(result)
        let cardNumber = resultData.account_number ? resultData.account_number : resultData.mpan
        let cardBrand = resultData?.card_brand ? resultData?.card_brand.toUpperCase() : resultData.account_type?.toUpperCase()

        if (cardBrand === "AMERICAN EXPRESS") {
          cardBrand = "AMEX"
        }

        setAccount(resultData.token_id);
        setLastDigits(cardNumber.substr(cardNumber.length - 4));
        // setMonth({ key: resultData.exp_month, text: resultData.exp_month, value: resultData.exp_month, label: resultData.exp_month })
        setYear({ key: resultData.exp_year, text: resultData.exp_year, value: resultData.exp_year, label: resultData.exp_year })
        setCardType(cardBrand)

        switch (resultData.exp_month) {
          case "01": setMonth({ key: "January", text: "01", value: "January", label: "January" })
            break;
          case "02": setMonth({ key: "February", text: "02", value: "February", label: "February" })
            break;
          case "03": setMonth({ key: "March", text: "03", value: "March", label: "March" })
            break;
          case "04": setMonth({ key: "April", text: "04", value: "April", label: "April" })
            break;
          case "05": setMonth({ key: "May", text: "05", value: "May", label: "May" })
            break;
          case "06": setMonth({ key: "June", text: "06", value: "June", label: "June" })
            break;
          case "07": setMonth({ key: "July", text: "07", value: "July", label: "July" })
            break;
          case "08": setMonth({ key: "August", text: "08", value: "August", label: "August" })
            break;
          case "09": setMonth({ key: "September", text: "09", value: "September", label: "September" })
            break;
          case "10": setMonth({ key: "October", text: "10", value: "October", label: "October" })
            break;
          case "11": setMonth({ key: "November", text: "11", value: "November", label: "November" })
            break;
          case "12": setMonth({ key: "December", text: "12", value: "December", label: "December" })
        }

        // if (isEditMode && !(defaultAddress.zipCode !== enteredZip.text || defaultAddress.addressLine1 !== enteredAddress1 || defaultAddress.addressLine2 !== enteredAddress2 || defaultAddress.zipCodePlus !== enteredZipPlusCode)) {
        //     changeAddressType(true, null)
        //     // setTimeout(() => {
        //     setValidate(true);
        //     validateAddress(true);
        //     // }, 1000);
        // } else {
        setAddressValidate(true)
        setAalidateAddressFields(true)
        setExistingCreditCardToken(account);

        let isExitingCard = cardList.filter((i: any) => i.lastfourdigits === cardNumber.substr(cardNumber.length - 4) && i.type === cardBrand)

        if (isExitingCard.length > 0) {
          notifyOutputChangedFunction(0, "You have saved this Payment method already.")
          paymentType === "ACH" ? generateAchUID("") : generateCCUID("")

        } else if (ppt && cardBrand === "SAVINGS" && editCardData.isPrimary) {
          notifyOutputChangedFunction(0, "For PPT Enrolled Accounts , Primary Pay type can only be CHECKING Account.");
          generateAchUID("")
          // } else if (ppt && (cardBrand === "SAVINGS" || cardBrand === "CHECKING")) {
          //     notifyOutputChangedFunction(0, "For PPT Enrolled Accounts , Secondary or Tertiary Pay types can only be Credit Cards.");
          //     setIsLoading(false);
          //     setApiStatus("")
        } else validateBillingAddress(resultData.token_id)

        // }

      })
      .catch(error => {
        let errorMessage = paymentType === "creditCard" ? "Please enter valid card details and validate" : "Please enter valid ACH details and validate";
        notifyOutputChangedFunction(0, errorMessage);
        // setTimeout(() => {
        setIsLoading(false);
        setApiStatus("")
        console.log('error', error)
      });
  }


  const pptValidate = async () => {
    let resultURl = await getURL(oauthToken, "CAMS_PPT_FLAG") as any;
    let primaryCard = cardList.filter((i: any) => i.isPrimary)
    let secondryACH = cardList.filter((i: any) => !i.isPrimary && (i.type === "CHECKING" || i.type === "SAVINGS"))

    if (ppt) {
      notifyOutputChangedFunction(0, "You are no longer Enrolled in Pay Per Trip Replenishment option.")
    }

    if (primaryCard[0]?.type === "CHECKING" && secondryACH.length === 0) {
      // let resultURl = await getURL(oauthToken, "CHI001") as any;
      setIsLoading(true);
      setApiStatus("loading");
      // let resultURl = await getURL(oauthToken, "ADD01") as any;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let APIURL = context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("URL"))[0].split(":")[1]
      // if (APIURL === "PERF") {
      //     myHeaders.append("Ocp-Apim-Subscription-Key", "3501fcd9b4e3418eb19e89556bc7ad0a");
      // } else {
      myHeaders.append("Authorization", "Bearer " + oauthToken);
      // }

      var raw = JSON.stringify({
        "accountNumber": accountNumber,
        "loggedUserId": userID,
        "pptFlag": !ppt,
        "operation": "UPDATE",
        "accountGuid": accountGuid
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(resultURl, requestOptions as any)
        .then(response => response.text())
        .then((result: any) => {
          let resultData = JSON.parse(result)
          // setIsLoading(false);
          // setApiStatus("");
          replenishment(oauthToken, accountNumber, accountGuid, "");
          console.log("CAMS_PPT_FLAG", resultData);
          setIsLoading(false);
          setApiStatus("")
          cancelACHCCPaymentModal();

          notifyOutputChangedFunction(1, resultData.pptFlagOutput ? "PPT Enable" : "PPT Disable")
        }).catch(error => {
          setIsLoading(false);
          setApiStatus("");
          setDisableValidateButton(false);
          console.log('error', error)
        });

    } else {
      if (secondryACH.length === 0 || primaryCard[0]?.type !== "CHECKING") {
        notifyOutputChangedFunction(0, "Please Add CHECKING account as Primary Pay Type and try again.")
      } else {
        notifyOutputChangedFunction(0, "For PPT Enrolled Accounts , Secondary or Tertiary Pay types can only be Credit Cards.")
      }

    }


  }

  const onPaytypeSelect = (i: string) => {
    if (i === "creditCard" ? isDisabledCreditCard : isDisabledACH) {
      if (ppt && isEditMode && editCardData?.type === "CHECKING") {
        notifyOutputChangedFunction(0, "For PPT Enrolled Accounts , Primary Pay type can only be CHECKING Account.");
      } else if (ppt && isEditMode &&
        (editCardData?.type === "DISCOVER" || editCardData?.type === "AMEX" || editCardData?.type === "MASTERCARD" || editCardData?.type === "VISA")) {
        notifyOutputChangedFunction(0, "For PPT Enrolled Accounts , Secondary or Tertiary Pay types can only be Credit Cards.");
      }

    } else {
      changePaymentTypesValidate(i)
    }
  }

  const cancelACHCCPaymentModal = () => {
    setReplinshmentGuid("");
    setPayTypeCard({
      "ReplinshmentGuid": "",
      "billingAddressLine1": "",
      "billingAddressLine2": "",
      "city": "",
      "state": "",
      "zipcode": "",
      "country": "",
      "type": "",
      "tokenNumber": ""
    })
    // setFirstName("")
    // setLastName("")
    replenishment("", "", "", paymentType);
    setPaymentType("creditCard")
    resetAddress(isEditMode ? true : false, false);
    setIsEditMode(false)
    setIsActiveAddPaymentModal(false)
    setIsPrimaryDisabled(false);
  }


  const handleIframeLoad = (event: any) => {
    const iframe = event.target;
    const iframeWindow = iframe.contentWindow;
    // iframeWindow.postMessage('Hello from parent!', '*');
    // iframeWindow.addEventListener('message', handleMessage);
    // iframeWindow.postMessage('Hello from parent!', '*');
  }

  const handleMessage = (event: any) => {
    if (event.data === 'paymentComplete') {
      console.log('Payment complete!');
    }
  }

  React.useEffect(() => {
    window.addEventListener("message", function (event) {
      console.log("event", JSON.stringify(event))
      if (event.origin === "https://chase-var.hostedpaymentservice.net") {
        console.log("token", event.data)


      }
    },
      false
    );
  });


  const getURL = async (token: string, url: string) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token ? token : oauthToken);
    myHeaders.append("Cookie", "ARRAffinity=589917b0d649b36637cfb601fcf2d7f38e8317b7bdc86b70066293967e24b15d; ReqClientId=1b389e45-e7fe-46bc-a4ef-8f69d370f206; orgId=c94dca5c-8779-4ebc-97cd-cbcc56ff2336");
    let tokenURL = "https://nytolling-dev.crm.dynamics.com/api/data/v9.2/vector_serviceentities?$select=vector_serviceurl,vector_username,vector_password&$filter=vector_name eq "
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    let APIURL = context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("URL"))[0]?.split(":")[1]

    if (APIURL === "UAT") {
      tokenURL = "https://ctsgtolling-uat.crm.dynamics.com/api/data/v9.2/vector_serviceentities?$select=vector_serviceurl,vector_username,vector_password,&$filter=vector_name eq "
    } else if (APIURL === "TEST") {
      tokenURL = "https://ctsgtolling-test.crm.dynamics.com/api/data/v9.2/vector_serviceentities?$select=vector_serviceurl,vector_username,vector_password,&$filter=vector_name eq "
    } else if (APIURL === "DEMO") {
      tokenURL = "https://ctsgtolling-demo.crm.dynamics.com/api/data/v9.2/vector_serviceentities?$select=vector_serviceurl,vector_username,vector_password,&$filter=vector_name eq "
    } else if (APIURL === "PERF") {
      tokenURL = "https://nytolling-perf.crm.dynamics.com/api/data/v9.2/vector_serviceentities?$select=vector_serviceurl,vector_username,vector_password,&$filter=vector_name eq "
    } else if (APIURL === "azqa") {
      tokenURL = "https://nytolling-azqa.api.crm.dynamics.com/api/data/v9.2/vector_serviceentities?$select=vector_serviceurl,vector_username,vector_password,&$filter=vector_name eq "
    } else {
      tokenURL = "https://nytolling-dev.crm.dynamics.com/api/data/v9.2/vector_serviceentities?$select=vector_serviceurl,vector_username,vector_password&$filter=vector_name eq "
    }

    let response = await fetch(tokenURL + "'" + url + "'", requestOptions as any)
    // .then(response => response.text()).then((result: any) => {
    let result = await response.json()
    if (result) {
      if (url === "TOKEN") {
        return result.value[0]
      } else return result.value[0].vector_serviceurl
    }
    // }).catch(error => {
    //     debugger
    //     console.log('error', error)
    // });
  }


  const tokengeneration = async (accountNumberData: string, CRMToken: string, accountGuid: string) => {
    let resultURl = await getURL(CRMToken, "CAMS_TOKEN") as any;
    let Authorization = await getURL(CRMToken, "TOKEN") as any;
    let APIURL = context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("URL"))[0].split(":")[1]


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    // if (APIURL === "PERF") {
    //     myHeaders.append("Ocp-Apim-Subscription-Key", "3501fcd9b4e3418eb19e89556bc7ad0a");
    // } else {
    myHeaders.append("Authorization", "Basic " + btoa(Authorization.vector_username + ":" + Authorization.vector_password));
    // }
    // myHeaders.append("Authorization", "Basic YzI3YWZiMDI1NTI0NGFhOGExOTQ1NzdiMDkyYTVjYzI6MmYxYWRjYzktMjJlOS00ZDljLTlmNjYtNjVhNWU4YzFjNzVj");
    myHeaders.append("Cookie", "ReqClientId=46b4987e-bb5b-48a0-88d1-f16284b434ab; fpc=AvZIJ3hjT8dCoic0Sg7DAa5ZYsDaAQAAAFU_utkOAAAA");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("scope", "urn:opc:idm:__myscopes__");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(resultURl, requestOptions as any)
      .then(response => response.text()).then((result: any) => {
        console.log(JSON.parse(result));
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // myHeaders.append("Cookie", "ARRAffinity=e4997b74c893fe5e15c3bdb0c83d0f8a879d21004b66c7cfa4b0dc2498c68729; ReqClientId=71b816e4-5d2f-4234-9a5a-812c1bcd29c2; fpc=Asy8nNT_slFPjfkx9bpLM4UjBjv-AQAAAHkTVtkOAAAAZ0sq1QEAAADgE1bZDgAAAA; orgId=c94dca5c-8779-4ebc-97cd-cbcc56ff2336; stsservicecookie=estsfd; x-ms-gateway-slice=estsfd");

        // var urlencoded = new URLSearchParams();
        // urlencoded.append("client_id", "5c95c003-b26a-4f6f-8afa-26e953ce822b");
        // urlencoded.append("client_secret", "eO47Q~sfdbBuTNxl804Uic3-rBks~gDztrz1m");
        // urlencoded.append("grant_type", "client_credentials");
        // urlencoded.append("resource", "https://ctsgtolling-test.crm.dynamics.com");

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: urlencoded,
        //     redirect: 'follow'
        // };

        // fetch("https://api-ss-qa-tollingbos.services.conduent.com/CRM/oauth2/token", requestOptions as any)
        //     .then(response => response.text()).then((result: any) => {
        //         replenishment(JSON.parse(result).access_token, accountNumberData ? accountNumberData : context.parameters?.accountNumber?.formatted);
        //         setOauthToken(JSON.parse(result).access_token);
        //         getZipcode(JSON.parse(result).access_token);
        //         getStateCode(JSON.parse(result).access_token);
        //         getCountries(JSON.parse(result).access_token);
        //     }).catch(error => {
        //         debugger
        //     });

        // replenishment("", accountNumberData ? accountNumberData : context.parameters?.accountNumber?.formatted);
        setBearerToken(JSON.parse(result)?.access_token ? JSON.parse(result)?.access_token : "");
        generateCCUID(JSON.parse(result)?.access_token ? JSON.parse(result)?.access_token : "");
        replenishment(CRMToken, accountNumberData, accountGuid, "");
      }).catch(error => {
        debugger
      });
  }

  const getStateCode = async (token: any) => {
    let resultURl = await getURL(token, "CAMS_STATES") as any;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token ? token : oauthToken);
    myHeaders.append("Cookie", "ARRAffinity=a9fa9d98e3104f1d746856065b3923381c8e77c431acd9ebc2682fcbccee3f51; ReqClientId=1b389e45-e7fe-46bc-a4ef-8f69d370f206; orgId=c94dca5c-8779-4ebc-97cd-cbcc56ff2336");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(resultURl, requestOptions as any)
      .then(response => response.text()).then((result: any) => {
        let data = JSON.parse(result).value

        let stateCodeData = [] as any;
        data.map((i: any) => stateCodeData.push({ "key": i.vector_name, "text": i.vector_name, "id": i.vector_stateid }))
        if (stateCodeData !== stateList) {
          setStateList(stateCodeData)
        }

      }).catch(error => {
        debugger
      });
  }

  const getZipcode = async (token: any) => {
    let resultURl = await getURL(token, "CAMS_ZIPCODES") as any;

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "ARRAffinity=2f10c6d566644f6d5649b31e2213a8f0715fd6d7e855028db287989b6ac0968a; ReqClientId=1b389e45-e7fe-46bc-a4ef-8f69d370f206; orgId=c94dca5c-8779-4ebc-97cd-cbcc56ff2336");
    myHeaders.append("Authorization", "Bearer " + token ? token : oauthToken);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(resultURl, requestOptions as any)
      .then(response => response.text()).then((result: any) => {
        let data = JSON.parse(result).value

        let zipCodeData = [] as any;
        data.map((i: any) => zipCodeData.push({ "value": i.vector_name, "label": i.vector_name, "key": i.vector_name, "text": i.vector_name, "id": i._vector_cityid_value }))
        if (zipCodeData !== zipCode) {
          setZipCode(zipCodeData)
        }

      }).catch(error => {
        debugger
      });
  }

  const getCountries = async (token: any) => {
    let resultURl = await getURL(token, "CAMS_COUNTRIES") as any;

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "ARRAffinity=2f10c6d566644f6d5649b31e2213a8f0715fd6d7e855028db287989b6ac0968a; ReqClientId=1b389e45-e7fe-46bc-a4ef-8f69d370f206; orgId=c94dca5c-8779-4ebc-97cd-cbcc56ff2336");
    myHeaders.append("Authorization", "Bearer " + token ? token : oauthToken);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(resultURl, requestOptions as any)
      .then(response => response.text()).then((result: any) => {
        let data = JSON.parse(result).value

        let countriesCodeData = [] as any;
        data.map((i: any) => countriesCodeData.push({ "key": i.vector_name, "text": i.vector_name, "id": i.vector_countryid }))
        if (countriesCodeData !== countryName) {
          setCountryName(countriesCodeData)
        }


      }).catch(error => {
        debugger
      });
  }

  const getStateCountry = async (id: any) => {
    let resultURl = await getURL(oauthToken, "CAMS_CITIES") as any;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + oauthToken);
    myHeaders.append("Cookie", "ARRAffinity=a9fa9d98e3104f1d746856065b3923381c8e77c431acd9ebc2682fcbccee3f51; ReqClientId=1b389e45-e7fe-46bc-a4ef-8f69d370f206; orgId=c94dca5c-8779-4ebc-97cd-cbcc56ff2336");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(resultURl + " " + id, requestOptions as any)
      .then(response => response.text()).then((result: any) => {
        let data = JSON.parse(result).value

        if (data.length > 0) {
          let stateId = data[0]?._vector_stateid_value;
          let countryId = data[0]?._vector_countryid_value

          let stateCode = stateList.filter((i: any) => i.id === stateId)
          let countryCode = countryName.filter((i: any) => i.id === countryId)
          setEnteredState(stateCode[0]);
          setEnteredCountry(countryCode[0]);
          setEnteredCity(data[0]?.vector_name);

        }

      }).catch(error => {
        debugger
      });
  }


  const onChangeCaseStatus = (event: any, item: any): void => {
    setState(item);
  };

  const onChangeCountry = (event: any, item: any): void => {
    setCountry(item);
  };

  const onInputZipChange = (input: any, reason: any) => {
    if (input.length > 4) {
      let value = input.toLocaleUpperCase()
      let filteredItems = zipCode.filter((i: any) =>
        i.value.match(value)
      ) as any;
      if ((reason.action === 'input-change' || reason.action === 'set-value') && filteredItems.length === 1) {
        resetDefaultAddress()
        setEnteredZip({ key: filteredItems[0].value, text: filteredItems[0].value, value: filteredItems[0].value, label: filteredItems[0].value });
        getStateCountry(value)
      } else {
        debugger
      }
    }

  }

  const onInputMonthYearChange = (input: any, reason: any, type: any) => {
    if (input.length < 3 && type === "month") {
      const filteredItems = MonthList.filter((i: any) =>
        i.value.match(input)
      );
      if ((reason.action === 'input-change' || reason.action === 'set-value') && filteredItems.length === 1) {
        setMonth({ key: input, text: input, value: input, label: input })
      } else {
        debugger
      }
    } else if (input.length < 5 && type === "year") {
      const filteredItems = yearList.filter((i: any) =>
        i.value.match(input)
      );
      if ((reason.action === 'input-change' || reason.action === 'set-value') && filteredItems.length === 1) {
        setYear({ key: input, text: input, value: input, label: input })
      } else {
        debugger
      }
    }

  }

  const onChangeZip = (item: any): void => {
    if (item.target.value.length > 4) {
      let zipcodeItem = zipCode.filter((i: any) => i.text === item.target.value) as any
      if (zipcodeItem.length > 0) {
        resetDefaultAddress()
        setEnteredZip(zipcodeItem[0])
        getStateCountry(zipcodeItem[0].id)
      } else {
        notifyOutputChangedFunction(0, "Please enter valid Zipcode");
      }
    } else {
      notifyOutputChangedFunction(0, "Please enter valid Zipcode");
    }

  };

  const setLogOnMode = (data: any, editMode: boolean, editRecord: any, information: any) => {

    if (data.length >= 4 && !editMode) {
      setIsDisabledCreditCard(true);
      setIsDisabledACH(true);
      setIsDisabledCheck(true);
      setDisablePayment(true);
    } else {
      setDisablePayment(false);
      let logOnModesResponse = { "@odata.context": "https://ctsgtolling-test.crm.dynamics.com/api/data/v9.0/$metadata#vector_paytypeses(statecode,vector_accounttype,vector_isreplenishments,createdon,vector_paytypesid,vector_logonmodes,vector_paytype,vector_ispayments)", "@odata.count": 69, "@Microsoft.Dynamics.CRM.totalrecordcount": 69, "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false, "@Microsoft.Dynamics.CRM.globalmetadataversion": "115500174", "value": [{ "@odata.etag": "W/\"67689134\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:34Z", "vector_paytypesid": "78132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735147\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:37Z", "vector_paytypesid": "bc132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735590\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:44Z", "vector_paytypesid": "99142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735594\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:44Z", "vector_paytypesid": "9b142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735598\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:44Z", "vector_paytypesid": "9d142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735602\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:44Z", "vector_paytypesid": "9f142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735931\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:49Z", "vector_paytypesid": "43152dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734597\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:28Z", "vector_paytypesid": "a8122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734610\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:28Z", "vector_paytypesid": "ae122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734622\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:28Z", "vector_paytypesid": "b4122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734634\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:29Z", "vector_paytypesid": "bb122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734646\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:29Z", "vector_paytypesid": "c1122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734658\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:29Z", "vector_paytypesid": "c7122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "RETAILER", "vector_logonmodes": 9, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734894\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:32Z", "vector_paytypesid": "3e132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735750\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:46Z", "vector_paytypesid": "e9142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734340\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:24Z", "vector_paytypesid": "26122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734706\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:30Z", "vector_paytypesid": "df122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734718\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:30Z", "vector_paytypesid": "e5122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734730\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:30Z", "vector_paytypesid": "eb122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "RETAILER", "vector_logonmodes": 9, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734742\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:30Z", "vector_paytypesid": "f1122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734778\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:31Z", "vector_paytypesid": "04132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734794\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:31Z", "vector_paytypesid": "0c132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735606\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:44Z", "vector_paytypesid": "a1142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "AGENCY", "vector_logonmodes": 10, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735786\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:47Z", "vector_paytypesid": "fb142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734316\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:22Z", "vector_paytypesid": "1a122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734814\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:31Z", "vector_paytypesid": "16132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734830\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:32Z", "vector_paytypesid": "1e132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734842\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:32Z", "vector_paytypesid": "24132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "RETAILER", "vector_logonmodes": 9, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734854\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:32Z", "vector_paytypesid": "2a132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734866\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:32Z", "vector_paytypesid": "30132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735810\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:47Z", "vector_paytypesid": "07152dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735015\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:34Z", "vector_paytypesid": "7a132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735055\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:35Z", "vector_paytypesid": "8e132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735079\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "9a132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735087\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "9e132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735091\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "a0132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735099\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "a4132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735838\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:48Z", "vector_paytypesid": "15152dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734352\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:24Z", "vector_paytypesid": "2c122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734364\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:24Z", "vector_paytypesid": "32122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734376\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:24Z", "vector_paytypesid": "38122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734388\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:24Z", "vector_paytypesid": "3e122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "RETAILER", "vector_logonmodes": 9, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734400\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:24Z", "vector_paytypesid": "45122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734412\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:25Z", "vector_paytypesid": "4b122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734424\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:25Z", "vector_paytypesid": "51122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735762\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:47Z", "vector_paytypesid": "ef142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734898\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:33Z", "vector_paytypesid": "40132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734910\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:33Z", "vector_paytypesid": "46132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734922\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:33Z", "vector_paytypesid": "4c132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734934\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:33Z", "vector_paytypesid": "52132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734946\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:33Z", "vector_paytypesid": "58132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734959\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:33Z", "vector_paytypesid": "5e132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "RETAILER", "vector_logonmodes": 9, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734971\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:34Z", "vector_paytypesid": "64132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735822\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:48Z", "vector_paytypesid": "0d152dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735027\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:34Z", "vector_paytypesid": "80132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735059\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:35Z", "vector_paytypesid": "90132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735083\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "9c132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735095\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "a2132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735103\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "a6132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735614\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:44Z", "vector_paytypesid": "a5142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735842\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:48Z", "vector_paytypesid": "17152dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734456\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:25Z", "vector_paytypesid": "61122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734469\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:26Z", "vector_paytypesid": "67122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734481\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:26Z", "vector_paytypesid": "6d122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734493\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:26Z", "vector_paytypesid": "73122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734505\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:26Z", "vector_paytypesid": "79122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734517\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:27Z", "vector_paytypesid": "7f122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "RETAILER", "vector_logonmodes": 9, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734529\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:27Z", "vector_paytypesid": "85122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735766\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:47Z", "vector_paytypesid": "f1142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }] }

      let filtredLogonModes = logOnModesResponse.value.filter(i => i["vector_logonmodes@OData.Community.Display.V1.FormattedValue"] == context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("logOnModes"))[0]?.split(":")[1] && i["vector_accounttype@OData.Community.Display.V1.FormattedValue"] == "PRIVATE")

      filtredLogonModes.map(i => {
        switch (i.vector_paytype) {
          case "AMEX": setIsDisabledCreditCard(false)
            break;
          case "VISA": setIsDisabledCreditCard(false)
            break;
          case "MASTERCARD": setIsDisabledCreditCard(false)
            break;
          case "DISCOVER": setIsDisabledCreditCard(false)
            break;
          case "CASH": setIsDisabledCash(false)
            break;
          case "CHECKING": setIsDisabledACH(false)
            break;
          case "SAVINGS": setIsDisabledACH(false)
            break;
          case "CHECK": setIsDisabledCheck(false)
        }
      })
    }

    // let paytypesList = data.filter((i: any) => i.isRecurring)

    if (data.length > 1 || data[0]?.type === "CHECK") {
      setIsDisabledCheck(true)
    }

    // if (cardList && i) {
    //     let isAchSecondry = cardList?.filter((i: any) => !i.isPrimary && (i.type === "SAVINGS" || i.type === "CHECKING"))
    //     if ((i?.type === "SAVINGS" || i?.type === "CHECKING") && i?.isPrimary && isAchSecondry.length > 0) {
    //         setIsDisabledCreditCard(true);
    //     }
    // }

    if (context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("disableCash"))[0].split(":")[1]) {
      setIsDisabledCash(true)
    }
    // if (context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("disableCC"))[0].split(":")[1] || (ppt && editMode && editRecord?.type === "CHECKING")) {
    //     setIsDisabledCreditCard(true)
    // }
    if (context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("disableCC"))[0].split(":")[1] || (ppt && editMode)) {
      setIsDisabledCreditCard(true)
    }
    // if (context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("disableACH"))[0].split(":")[1] || (ppt && editMode &&
    //     (editRecord?.type === "DISCOVER" || editRecord?.type === "AMEX" || editRecord?.type === "MASTERCARD" || editRecord?.type === "VISA")) || ((information ? information?.pptFlag : ppt) && !editMode)) {
    //     setIsDisabledACH(true)
    // }
    if (context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("disableACH"))[0].split(":")[1] || (ppt && editMode) || ((information ? information?.pptFlag : ppt) && !editMode)) {
      setIsDisabledACH(true)
    }
    if (context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("disableCheck"))[0].split(":")[1]) {
      setIsDisabledCheck(true)
    }
    if (context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("STVA"))[0].split(":")[1] && data.length > 0) {
      setIsDisabledCreditCard(true)
    }
  }

  const replenishment = async (access_token: string, accountNumberData: string, accountGuidData: string, type: string) => {
    let resultURl = await getURL(access_token.length > 0 ? access_token : oauthToken, "CAMS_ACCOUNT360") as any;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + (access_token.length > 0 ? access_token : oauthToken));        // crm

    let raw = JSON.stringify({
      "accountNumber": accountNumberData ? accountNumberData : accountNumber,
      "ProvideAccountVehicles": false,
      "ProvideAccountAddresses": true,
      "ProvideAccountDetails": true,
      "ProvideAccountContacts": false,
      "ProvideAccountPlan": false,
      "ProvideAccountDevice": false,
      "ProvideAccountRelenishment": true,
      "accountGuid": accountGuidData ? accountGuidData : accountGuid,
      "Source": "CSR"
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    return fetch(resultURl, requestOptions as any)
      .then(response => response.text())
      .then(async (result: any) => {
        console.log(JSON.parse(result));

        // setIsEditMode(false);
        let data = JSON.parse(result).replenishment

        // let logOnModes = [""];

        // switch (context.parameters?.logOnModes?.formatted) {
        //     case "WALK-IN": {
        //         logOnModes = ["AMEX", "CASH", "MASTERCARD", "SAVINGS", "VISA", "CHECKING", "DISCOVER", "CHECK"];
        //     }
        //         break;
        //     case "PHONE-IN": {
        //         logOnModes = ["AMEX", "MASTERCARD", "SAVINGS", "VISA", "CHECKING", "DISCOVER"];
        //     }
        //         break;
        //     case "LOCKBOX": {
        //         logOnModes = ["ACHPPT", "AMEX", "CASH", "CHECK", "CHECKING", "DISCOVER", "MASTERCARD", "SAVINGS", "VISA"];
        //     }
        //         break;
        //     case "FAX-IN": {
        //         logOnModes = [""];
        //     }
        //         break;
        //     case "MAIL-IN": {
        //         logOnModes = ["AMEX", "CASH", "MASTERCARD", "SAVINGS", "VISA", "CHECKING", "DISCOVER", "CHECK"];
        //     }
        //         break;
        //     case "BATCH": {
        //         logOnModes = ["ACHPPT", "AMEX", "CASH", "CHECK", "CHECKING", "DISCOVER", "MASTERCARD", "SAVINGS", "VISA"];
        //     }
        //         break;
        //     case "VRS": {
        //         logOnModes = [""];
        //     }
        //         break;
        //     case "AGENCY": {
        //         logOnModes = ["ACHPPT", "AMEX", "CASH", "MASTERCARD", "VISA", "CHECKING", "DISCOVER", "CHECK", "SAVINGS"];
        //     }
        //         break;
        //     case "RETAILER": {
        //         logOnModes = ["AMEX", "CASH", "DISCOVER", "MASTERCARD", "VISA"];
        //     }
        //         break;
        // }

        // let data = [] as any;

        // await resultData.map((i: any) => {
        //     logOnModes.map(j => {
        //         if (i.type === j) {
        //             data.push(i)
        //         }
        //     })
        // })



        // let logOnModesResponse = { "@odata.context": "https://ctsgtolling-test.crm.dynamics.com/api/data/v9.0/$metadata#vector_paytypeses(statecode,vector_accounttype,vector_isreplenishments,createdon,vector_paytypesid,vector_logonmodes,vector_paytype,vector_ispayments)", "@odata.count": 69, "@Microsoft.Dynamics.CRM.totalrecordcount": 69, "@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded": false, "@Microsoft.Dynamics.CRM.globalmetadataversion": "115500174", "value": [{ "@odata.etag": "W/\"67689134\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:34Z", "vector_paytypesid": "78132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735147\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:37Z", "vector_paytypesid": "bc132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735590\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:44Z", "vector_paytypesid": "99142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735594\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:44Z", "vector_paytypesid": "9b142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735598\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:44Z", "vector_paytypesid": "9d142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735602\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:44Z", "vector_paytypesid": "9f142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735931\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:49Z", "vector_paytypesid": "43152dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "ACHCPPT", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734597\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:28Z", "vector_paytypesid": "a8122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734610\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:28Z", "vector_paytypesid": "ae122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734622\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:28Z", "vector_paytypesid": "b4122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734634\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:29Z", "vector_paytypesid": "bb122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734646\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:29Z", "vector_paytypesid": "c1122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734658\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:29Z", "vector_paytypesid": "c7122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "RETAILER", "vector_logonmodes": 9, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734894\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:32Z", "vector_paytypesid": "3e132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735750\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:46Z", "vector_paytypesid": "e9142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "AMEX", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734340\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:24Z", "vector_paytypesid": "26122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734706\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:30Z", "vector_paytypesid": "df122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734718\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:30Z", "vector_paytypesid": "e5122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734730\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:30Z", "vector_paytypesid": "eb122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "RETAILER", "vector_logonmodes": 9, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734742\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:30Z", "vector_paytypesid": "f1122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734778\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:31Z", "vector_paytypesid": "04132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734794\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:31Z", "vector_paytypesid": "0c132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735606\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:44Z", "vector_paytypesid": "a1142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "AGENCY", "vector_logonmodes": 10, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735786\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:47Z", "vector_paytypesid": "fb142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "CASH", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734316\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:22Z", "vector_paytypesid": "1a122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734814\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:31Z", "vector_paytypesid": "16132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734830\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:32Z", "vector_paytypesid": "1e132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734842\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:32Z", "vector_paytypesid": "24132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "RETAILER", "vector_logonmodes": 9, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734854\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:32Z", "vector_paytypesid": "2a132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734866\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:32Z", "vector_paytypesid": "30132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735810\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:47Z", "vector_paytypesid": "07152dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "CHECK", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735015\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:34Z", "vector_paytypesid": "7a132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735055\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:35Z", "vector_paytypesid": "8e132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735079\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "9a132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735087\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "9e132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735091\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "a0132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735099\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "a4132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735838\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:48Z", "vector_paytypesid": "15152dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "CHECKING", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734352\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:24Z", "vector_paytypesid": "2c122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734364\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:24Z", "vector_paytypesid": "32122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734376\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:24Z", "vector_paytypesid": "38122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734388\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:24Z", "vector_paytypesid": "3e122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "RETAILER", "vector_logonmodes": 9, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734400\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:24Z", "vector_paytypesid": "45122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734412\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:25Z", "vector_paytypesid": "4b122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734424\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:25Z", "vector_paytypesid": "51122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735762\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:47Z", "vector_paytypesid": "ef142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "DISCOVER", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734898\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:33Z", "vector_paytypesid": "40132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734910\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:33Z", "vector_paytypesid": "46132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734922\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:33Z", "vector_paytypesid": "4c132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734934\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:33Z", "vector_paytypesid": "52132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734946\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:33Z", "vector_paytypesid": "58132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734959\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:33Z", "vector_paytypesid": "5e132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "RETAILER", "vector_logonmodes": 9, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734971\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:34Z", "vector_paytypesid": "64132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735822\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:48Z", "vector_paytypesid": "0d152dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "MASTERCARD", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735027\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:34Z", "vector_paytypesid": "80132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735059\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:35Z", "vector_paytypesid": "90132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735083\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "9c132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735095\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "a2132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735103\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:36Z", "vector_paytypesid": "a6132dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735614\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:44Z", "vector_paytypesid": "a5142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735842\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:48Z", "vector_paytypesid": "17152dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "SAVINGS", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734456\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:25Z", "vector_paytypesid": "61122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "VRS", "vector_logonmodes": 6, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734469\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:26Z", "vector_paytypesid": "67122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WALK-IN", "vector_logonmodes": 1, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734481\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:26Z", "vector_paytypesid": "6d122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "MAIL-IN", "vector_logonmodes": 2, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734493\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:26Z", "vector_paytypesid": "73122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "PHONE-IN", "vector_logonmodes": 4, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734505\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:26Z", "vector_paytypesid": "79122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "WEBSITE", "vector_logonmodes": 5, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734517\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:27Z", "vector_paytypesid": "7f122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "RETAILER", "vector_logonmodes": 9, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52734529\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:27Z", "vector_paytypesid": "85122dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "BATCH", "vector_logonmodes": 8, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }, { "@odata.etag": "W/\"52735766\"", "statecode@OData.Community.Display.V1.FormattedValue": "Active", "statecode": 0, "vector_accounttype@OData.Community.Display.V1.FormattedValue": "PRIVATE", "vector_accounttype": 1, "vector_isreplenishments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_isreplenishments": true, "createdon@OData.Community.Display.V1.FormattedValue": "1/26/2022 11:14 AM", "createdon": "2022-01-26T05:44:47Z", "vector_paytypesid": "f1142dfa-6a7e-ec11-8d21-000d3a1a5fad", "vector_logonmodes@OData.Community.Display.V1.FormattedValue": "LOCKBOX", "vector_logonmodes": 13, "vector_paytype": "VISA", "vector_ispayments@OData.Community.Display.V1.FormattedValue": "Yes", "vector_ispayments": true }] }

        // let filtredLogonModes = logOnModesResponse.value.filter(i => i["vector_logonmodes@OData.Community.Display.V1.FormattedValue"] == context.parameters?.logOnModes?.formatted && i["vector_accounttype@OData.Community.Display.V1.FormattedValue"] == "PRIVATE")

        // filtredLogonModes.map(i => {
        //     switch (i.vector_paytype) {
        //         case "AMEX": setIsDisabledCreditCard(false)
        //             break;
        //         case "VISA": setIsDisabledCreditCard(false)
        //             break;
        //         case "MASTERCARD": setIsDisabledCreditCard(false)
        //             break;
        //         case "DISCOVER": setIsDisabledCreditCard(false)
        //             break;
        //         case "CASH": setIsDisabledCash(false)
        //             break;
        //         case "CHECKING": setIsDisabledACH(false)
        //             break;
        //         case "SAVINGS": setIsDisabledACH(false)
        //             break;
        //         case "CHECK": setIsDisabledCheck(false)
        //     }
        // })

        if (data.length > 0) {
          data.sort((i: any, j: any) => j.order - i.order).reverse();
          if (data[0].isPrimary && type === "") {
            notifyOutputChangedFunction(data[0].type, "");
            onSelectPaytypeCard(data[0])
          }
          // let AchPrimaryData = data.filter((i: any) => i.type === "SAVINGS" || i.type === "CHECKING");
          // setIsAchPrimary(AchPrimaryData.length > 0 ? true : false);
        }

        // setLogOnMode(data, false, null);


        let addressList = JSON.parse(result).addresses;
        let information = JSON.parse(result).information[0];
        let contacts = JSON.parse(result).contacts?.map((i: any) => i.isprimarycontact === "True")
        setAccountType(information.type)
        let billingAddressType = "ROV";
        if (information.type === "PRIVATE" || information.type === "PRVA" || information.type === "BUSINESS" || information.type === "BRVA") {
          billingAddressType = "MAILING"
          setBillingAddressType("Mailing")
        } else if (information.type === "PVIDEOUNREG" || information.type === "BVIDEOUNREG") {
          billingAddressType = "ROV"
          setBillingAddressType("ROV")
        } else {
          billingAddressType = "SHIPPING"
          setBillingAddressType("Shipping")
        }

        if (information.firstName) {
          setppt(information.pptFlag)
          setFirstName(information.firstName)
          setLastName(information.lastName)
        } else {
          setppt(information.pptFlag)
          setFirstName(contacts.firstName)
          setLastName(contacts.lastName)
        }

        setLogOnMode(data, false, null, information);

        let defaultAddress = addressList.filter((i: any) => i.addressType === billingAddressType);

        if (defaultAddress.length > 0) {
          setDefaultAddress(defaultAddress[0]);
          setEnteredAddress1(defaultAddress[0].addressLine1);
          setEnteredAddress2(defaultAddress[0].addressLine2);
          setEnteredCity(defaultAddress[0].city);
          setEnteredZipPlusCode(defaultAddress[0].zipCodePlus);
          setEnteredState({ key: defaultAddress[0].state, text: defaultAddress[0].state });
          setEnteredCountry({ key: defaultAddress[0].country, text: defaultAddress[0].country });
          setEnteredZip({ key: defaultAddress[0].zipCode, text: defaultAddress[0].zipCode, value: defaultAddress[0].zipCode, label: defaultAddress[0].zipCode });
        } else if (information.length > 0) {
          setDefaultAddress(information[0]);
          setEnteredAddress1(information[0].addressLine1);
          setEnteredAddress2(information[0].addressLine2);
          setEnteredCity(information[0].city);
          setEnteredZipPlusCode(information[0].zipCodePlus);
          setEnteredState({ key: information[0].state, text: information[0].state });
          setEnteredCountry({ key: information[0].country, text: information[0].country });
          setEnteredZip({ key: information[0].zipCode, text: information[0].zipCode, value: information[0].zipCode, label: information[0].zipCode });
        } else {
          setHideShippingAddress(true);
          setIsEditAddress(false);
        }
        // setIsPrimaryDisabled(data.length === 0 ? true : false);
        setCardList(data);

        setPrimaryCard(data.length === 0 ? true : false)
        // if (data.length === 1) {
        //     setPayTypeCard(data[0])
        //     setAddress1(data[0].billingAddressLine1)
        //     setAddress2(data[0].billingAddressLine2)
        //     setCity(data[0].city)
        //     setState({ key: data[0].state, text: data[0].state })
        //     setCountry({ key: data[0].country, text: data[0].country })
        //     setZip(data[0].zipcode);
        //     setFirstName(data[0].firstName);
        //     setMonth({ key: data[0].creditCardExpMonth, text: data[0].creditCardExpMonth })
        //     setYear({ key: data[0].creditCardExpirationYear, text: data[0].creditCardExpirationYear})
        //     setAccount(data[0].tokenNumber)
        //     setCardType(data[0].type)
        // }
        setIsLoading(false);
        setApiStatus("")
        return JSON.parse(result).replenishment;

      })
      .catch(error => {
        setIsLoading(false);
        setApiStatus("")
        debugger
      });
  }

  const changePaymentTypes = (i: string) => {
    setPrimaryCard(cardList.length === 0 ? true : false)
    setRecurringPayment(false)
    setValidateErrorMessage(true);
    setPaymentType(i);
    resetAddress(isEditMode ? false : true, true);
    setValidate(true);
    setAddressValidate(true);
    setAalidateAddressFields(false);
    setSuggestedAddress(false);
  }

  const changePaymentTypesValidate = (i: string) => {
    if (i === "creditCard" && !isDisabledCreditCard) {
      changePaymentTypes(i)
      generateCCUID(bearerToken)
    } else if (i === "check" && !isDisabledCheck) {
      changePaymentTypes(i)
    } else if (i === "cash" && !isDisabledCash) {
      changePaymentTypes(i)
    } else if (i === "ACH" && !isDisabledACH) {
      changePaymentTypes(i)
      generateAchUID(bearerToken)
      // if (!isAchPrimary) {
      //     setPrimaryCard(true)
      // }

    }
  }


  const deleteSelectedCard = async (i: any) => {

    let resultURl = await getURL(oauthToken, "CAMS_SWAP") as any;
    setIsLoading(true);
    setApiStatus("loading");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json"); // jwt
    myHeaders.append("Authorization", "Bearer " + oauthToken);

    var raw = JSON.stringify({
      "accountNumber": "",
      "accountGuid": accountGuid,
      "cardNumber": i.tokenNumber.substr(i.tokenNumber.length - 4),
      "operation": "delete",
      "source": "CSR",
      "tokenNumber": "",
      "replnishmentGuid": i.ReplinshmentGuid
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(resultURl, requestOptions as any)
      .then(response => response.text())
      .then((result: any) => {
        let dataResult = JSON.parse(result)
        console.log(JSON.parse(result));
        if (dataResult.status) {

          // setTimeout(() => {


          if (i.isPrimary && ppt) {
            pptValidate()
          } else {
            replenishment("", accountNumber, accountGuid, "");
            setApiStatus("success")
            notifyOutputChangedFunction(1, "");
            setPaymentSuccessMessage(dataResult.message);
            setIsLoading(false);
            setApiStatus("")
          }
          // }, 2000);
          // setIsVisiblePayment(false);
          // setIsPaymentSuccess(true);
        } else {
          setIsLoading(false);
          setApiStatus("")
          notifyOutputChangedFunction(0, dataResult?.message ? dataResult.message : dataResult?.error?.message);
        }
        setIsDeleteConfirmationModal({
          isVisible: false,
          redord: {}
        })
      })
      .catch(error => {
        debugger
        // setTimeout(() => {
        setIsLoading(false);
        setApiStatus("")
        // }, 2000);
      })
  }


  const onAchPay = async () => {
    let resultURl = await getURL(oauthToken, "CAMS_ACH") as any;

    setIsLoading(true);
    setApiStatus("loading");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ARRAffinity=b09c73547dc9fbff097e01a476419740093f9fae4b41e7008c9203303b45defa; ReqClientId=811d8daf-a09b-434a-a5dd-e543da79a6a5; orgId=3e546a64-7261-44f1-8320-872c8c50349d");
    myHeaders.append("Authorization", "Bearer " + oauthToken);        // crm
    var raw = JSON.stringify({
      "bankNumber": achAccountNumber,
      "bankRoutingNumber": routingNumber
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(resultURl, requestOptions as any)
      .then(response => response.text())
      .then((result: any) => {
        console.log(JSON.parse(result));
        let data = JSON.parse(result)
        debugger
        if (data.status) {
          replenishmentProfileID(data.token)
          setAccount(data.token);
          // onPay(data.token);
        }
        // setPaymentSuccessMessage()
        // setTimeout(() => {
        //     setIsLoading(false);
        //     setApiStatus("")
        // }, 2000);
      })
      .catch(error => {
        // setTimeout(() => {
        //     setIsLoading(false);
        //     setApiStatus("")
        // }, 2000);
        debugger
      });
  }

  const editSelectedCard = (i: any) => {
    // let address = {
    //     "addressLine1": i.billingAddressLine1,
    //     "addressLine2": i.billingAddressLine2,
    //     "city": i.city,
    //     "state": i.state,
    //     "country": i.country,
    //     "zipCode": i.zipcode,
    //     "zipCodePlus": "",
    // }
    // setDefaultAddress(address);
    setChaseProfileId(i.tokenNumber)
    setLogOnMode(cardList, true, i, null);
    setIsEditAddress(false);
    setEnteredAddress1(i.billingAddressLine1);
    setEnteredAddress2(i.billingAddressLine2);
    setEnteredCity(i.city);
    setEnteredZipPlusCode(i.zipplus4 ? i.zipplus4 : "");
    setEnteredState({ key: i.state, text: i.state });
    setEnteredCountry({ key: i.country, text: i.country });
    setEnteredZip({ key: i.zipcode, text: i.zipcode, value: i.zipcode, label: i.zipcode });
    setLastDigits(i.lastfourdigits);

    changeAddressType(false, null)
    setIsActiveAddPaymentModal(true);
    setIsEditMode(true);
    setEditCardData(i);
    setPaymentType(i.type === "SAVINGS" || i.type === "CHECKING" ? "ACH" : "creditCard")
    setReplinshmentGuid(i.ReplinshmentGuid);
    debugger
    setAddress1(i.billingAddressLine1);
    setAddress2(i.billingAddressLine2);
    setCity(i.city);
    setState({ key: i.state, text: i.state });
    setCountry({ key: i.country, text: i.country });
    setZip({ key: i.zipcode, text: i.zipcode });
    setFirstName(i.firstName);
    setLastName(i.lastName);


    switch (i.creditCardExpMonth) {
      case "01": setMonth({ key: "January", text: "01", value: "January", label: "January" })
        break;
      case "02": setMonth({ key: "February", text: "02", value: "February", label: "February" })
        break;
      case "03": setMonth({ key: "March", text: "03", value: "March", label: "March" })
        break;
      case "04": setMonth({ key: "April", text: "04", value: "April", label: "April" })
        break;
      case "05": setMonth({ key: "May", text: "05", value: "May", label: "May" })
        break;
      case "06": setMonth({ key: "June", text: "06", value: "June", label: "June" })
        break;
      case "07": setMonth({ key: "July", text: "07", value: "July", label: "July" })
        break;
      case "08": setMonth({ key: "August", text: "08", value: "August", label: "August" })
        break;
      case "09": setMonth({ key: "September", text: "09", value: "September", label: "September" })
        break;
      case "10": setMonth({ key: "October", text: "10", value: "October", label: "October" })
        break;
      case "11": setMonth({ key: "November", text: "11", value: "November", label: "November" })
        break;
      case "12": setMonth({ key: "December", text: "12", value: "December", label: "December" })
    }

    setYear({ key: i.creditCardExpirationYear, text: i.creditCardExpirationYear, value: i.creditCardExpirationYear, label: i.creditCardExpirationYear });
    setAccount(i.tokenNumber);
    setCardType(i.type);
    setPayTypeCard(i);
    setPrimaryCard(i.isPrimary);
    setProfileId(i.profileid);
    setExistingCreditCardToken(i.tokenNumber);
    setIsPrimaryDisabled(i.isPrimary)
    if (i.type === "CHECKING" || i.type === "SAVINGS") {
      setRoutingNumber(i.achBankRoutingNumber)
      setAchAccountNumber(i.achBankAccountNumber)
      let maskedValueEnd = i.achBankAccountNumber.substr(i.achBankAccountNumber.length - 4);
      setMaskedRoutingNumber("*".repeat(i.achBankAccountNumber.length - 4) + maskedValueEnd)
      // type
    }
  }

  const replenishmentUpdate = async (tokenNumber: any) => {
    let resultURl = await getURL(oauthToken, "CAMS_SWAP") as any;

    setIsLoading(true);
    setApiStatus("loading");
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer " + bearerToken); // crm
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ARRAffinity=ef3252fa878c599f9369bad4b30db3542fdb2333e7d85f84aed67aded023fa3d; ReqClientId=1b389e45-e7fe-46bc-a4ef-8f69d370f206; orgId=c94dca5c-8779-4ebc-97cd-cbcc56ff2336");
    myHeaders.append("Authorization", "Bearer " + oauthToken);
    // "addressLine1": isEditAddress ? defaultAddress.addressLine1 : enteredAddress1,
    // "addressLine2": isEditAddress ? defaultAddress.addressLine2 : enteredAddress2,
    // "city": isEditAddress ? defaultAddress.city : enteredCity,
    // "state": isEditAddress ? defaultAddress.state : enteredState.key,
    // "zip": isEditAddress ? defaultAddress.zipCode : enteredZip.key,
    // "zipExtn": isEditAddress ? defaultAddress.zipCodePlus : enteredZipPlusCode,
    // "country": isEditAddress ? defaultAddress.country : enteredCountry.key
    //   });
    let defaultAddressvalues = false;
    if (isEditMode && !(defaultAddress.zipCode !== enteredZip.text || defaultAddress.addressLine1 !== enteredAddress1 || defaultAddress.addressLine2 !== enteredAddress2 || defaultAddress.zipCodePlus !== enteredZipPlusCode)) {
      defaultAddressvalues = true
    }

    var raw = JSON.stringify({
      "accountNumber": accountNumber,
      "accountGuid": accountGuid,
      "operation": replinshmentGuid.length === 0 ? "Create" : "Update",
      "source": "CSR",
      "cardType": cardType,
      "tokenNumber": tokenNumber ? tokenNumber : account,
      "ccLastFourDigits": lastDigits,
      "cvv": cardType === "AMEX" ? "2134" : "213",
      "profileId": "",
      "isPrimary": cardList.length === 0 ? true : (primaryCard ? primaryCard : false),
      "isRecurring": true,
      "expiryMonth": paymentType === "ACH" ? "" : (month.text)?.toString(),
      "expiryYear": paymentType === "ACH" ? "" : (year.text)?.toString(),
      "achbankroutingNumber": paymentType === "ACH" ? tokenNumber ? tokenNumber : account : "",
      "firstName": firstName,
      "lastName": lastName,
      "billingaddressLine1": defaultAddressvalues ? defaultAddress.addressLine1 : address1,
      "billingaddressLine2": defaultAddressvalues ? defaultAddress.addressLine2 : address2,
      "billingzipCode": defaultAddressvalues ? defaultAddress.zipCode : zip.key,
      "billingZipPlusFour": defaultAddressvalues ? defaultAddress.zipCodePlus : enteredZipPlusCode,
      "billingCity": defaultAddressvalues ? defaultAddress.city : city,
      "billingState": defaultAddressvalues ? defaultAddress.state : state.key,
      "billingCountry": defaultAddressvalues ? defaultAddress.country : country.key,


      "rawcity": defaultAddressvalues ? defaultAddress.city : isEditAddress ? city : enteredCity,
      "rawstate": defaultAddressvalues ? defaultAddress.state : isEditAddress ? state.key : enteredState.text,
      "rawcountry": defaultAddressvalues ? defaultAddress.country : isEditAddress ? country.key : enteredCountry.text,
      "rawstreetLine1": defaultAddressvalues ? defaultAddress.addressLine1 : isEditAddress ? address1 : enteredAddress1,
      "rawstreetLine2": defaultAddressvalues ? defaultAddress.addressLine2 : isEditAddress ? address2 : enteredAddress2,
      "rawzipCode": defaultAddressvalues ? defaultAddress.zipCode : isEditAddress ? zip.key : enteredZip.text,
      "rawzipPlus4": defaultAddressvalues ? defaultAddress.zipCodePlus : isEditAddress ? enteredZipPlusCode : enteredZipPlusCode,
      "addressValidationStatus": "VALID ADDRESS",
      "matchIndicator": "FULL",
      "addressValidationDate": new Date().toISOString().split('T')[0].split("-")[1] + "/" + new Date().toISOString().split('T')[0].split("-")[2] + "/" + new Date().toISOString().split('T')[0].split("-")[0],
      "replnishmentGuid": replinshmentGuid,
      "uIUxLoginUserID": userID
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(resultURl, requestOptions as any)
      .then(response => response.text())
      .then(async (result: any) => {
        console.log(JSON.parse(result));
        let data = JSON.parse(result)
        setIsLoading(false);
        setIsActiveAddPaymentModal(false);
        setApiStatus("success")
        if (data.status) {
          generateCCUID(bearerToken);
          notifyOutputChangedFunction(1, "");
          // setIsVisiblePayment(false);
          setPaymentSuccessMessage(data.message);
          resetAddress(true, false);
          setIsPrimaryDisabled(false)
          // setFirstName("");
          // setLastName("");
          setPaymentType("creditCard")
          setPrimaryCard(cardList.length === 0 ? true : false)
          setIsEditMode(false);

          // setTimeout(() => {
          setIsLoading(false);
          setApiStatus("")
          await replenishment("", accountNumber, accountGuid, "");
          // }, 2000);
        } else {
          generateCCUID(bearerToken);
          notifyOutputChangedFunction(0, data?.message ? data.message : data?.error?.message);
          setIsLoading(false);
          setApiStatus("")
        }
      })
      .catch(error => {
        console.log("defaultAddressvalues", defaultAddressvalues)
        console.log("defaultAddress", defaultAddress)
        console.log("zip", zip.key)


        // setTimeout(() => {
        setIsLoading(false);
        setApiStatus("")
        // }, 2000);
        debugger
      });
  }


  const replenishmentProfileID = async (token: string) => {
    let resultURl = await getURL(oauthToken, "PRF01") as any;
    setIsLoading(true);
    setApiStatus("loading");
    // setIsVisiblePayment(false)
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json"); // jwt
    let APIURL = context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("URL"))[0].split(":")[1]
    // if (APIURL === "PERF") {
    //     myHeaders.append("Ocp-Apim-Subscription-Key", "3501fcd9b4e3418eb19e89556bc7ad0a");
    // } else {
    myHeaders.append("Authorization", "Bearer " + bearerToken);
    // }

    let raw = JSON.stringify({
      "crmAccountId": "",
      "etcAccountId": "",
      "region": "NY",
      "phone": 24567134,
      "accttype": cardType,
      "postal": zip.key,
      "expiry": month.text + (year.text)?.slice(-2),
      "city": city,
      "country": country.key,
      "address": address1,
      "name": "SA",
      "account": token ? token : account,
      "agencyId": agency,
      "currency": "USD",
      "sourceSystem": "WEB",
      "storeIdentifier": "TEST",
      "requestDate": "2021-11-19 15:18:46.327",
      "processedTime": "2021-11-19 15:18:46.327",
      "processIdentifier": "PROFILE",
      "system": "CRM",
      "storeIdenfier": "OTHER"
    })

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    return fetch(resultURl, requestOptions as any)
      .then(response => response.text())
      .then((result: any) => {
        console.log(JSON.parse(result));
        let APIResult = JSON.parse(result)
        if (APIResult.status) {
          replenishmentUpdate(token);
        } else {
          notifyOutputChangedFunction(0, APIResult?.message ? APIResult.message : APIResult?.error?.message ? APIResult?.error?.message : APIResult.result)
          setIsLoading(false);
          setApiStatus("success")
          // setIsVisiblePayment(false);
          setPaymentSuccessMessage(APIResult.result);
          // setTimeout(() => {
          setIsLoading(false);
          setApiStatus("")
          // }, 2000);
        }
      })
      .catch(error => {
        // setTimeout(() => {
        setIsLoading(false);
        setApiStatus("")
        // }, 2000);
        debugger
      });
  }


  const replenishmentCashCheck = async () => {
    let resultURl = await getURL(oauthToken, "CAMS_SWAP") as any;

    setIsLoading(true);
    setApiStatus("loading");
    // setIsVisiblePayment(false)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + oauthToken);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ARRAffinity=44aa4ced071d1ad5c37c5652e36d07317d1868696ff90be76886282d00065e3f; ReqClientId=1b389e45-e7fe-46bc-a4ef-8f69d370f206; orgId=c94dca5c-8779-4ebc-97cd-cbcc56ff2336");

    var raw = JSON.stringify({
      "accountNumber": accountNumber,
      "accountGuid": accountGuid,
      "operation": replinshmentGuid.length === 0 ? "Create" : "Update",
      "source": "CSR",
      "cardType": paymentType?.toUpperCase(),
      "replnishmentGuid": replinshmentGuid
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(resultURl, requestOptions as any)
      .then(response => response.text())
      .then((result: any) => {
        console.log(JSON.parse(result));
        let data = JSON.parse(result)
        if (data.status) {
          notifyOutputChangedFunction(1, "");
          // setIsVisiblePayment(false);
          setApiStatus("success")
          setIsActiveAddPaymentModal(false);
          setPaymentType("creditCard")
          setPaymentSuccessMessage(data.message);
          replenishment("", accountNumber, accountGuid, "");
          setIsLoading(false);
          resetAddress(true, false);
          // setTimeout(() => {
          setIsLoading(false);
          setApiStatus("")
          // }, 2000);
          // replenishment("", accountNumber, accountGuid);
        } else {
          notifyOutputChangedFunction(0, data?.message ? data.message : data?.error?.message);
          setIsLoading(false);
          setApiStatus("")
        }
        debugger
      })
      .catch(error => {
        // setTimeout(() => {
        setIsLoading(false);
        setApiStatus("")
        // }, 2000);
        debugger
      });
  }


  const onAchPayCheck = async () => {
    let resultURl = await getURL(oauthToken, "CAMS_ACH") as any;
    let resultURlAC = await getURL(oauthToken, "ACH02") as any;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "ARRAffinity=b09c73547dc9fbff097e01a476419740093f9fae4b41e7008c9203303b45defa; ReqClientId=811d8daf-a09b-434a-a5dd-e543da79a6a5; orgId=3e546a64-7261-44f1-8320-872c8c50349d");
    myHeaders.append("Authorization", "Bearer " + oauthToken);        // crm
    var raw = JSON.stringify({
      "bankNumber": achAccountNumber,
      "bankRoutingNumber": routingNumber
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(resultURl, requestOptions as any)
      .then(response => response.text())
      .then((result: any) => {
        console.log(JSON.parse(result));
        let data = JSON.parse(result)
        debugger
        if (data.status) {
          let myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          let APIURL = context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("URL"))[0].split(":")[1]
          // if (APIURL === "PERF") {
          //     myHeaders.append("Ocp-Apim-Subscription-Key", "3501fcd9b4e3418eb19e89556bc7ad0a");
          // } else {
          myHeaders.append("Authorization", "Bearer " + bearerToken);
          // }

          var raw = JSON.stringify({
            "account": data.token,
            "payType": cardType
          });

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          // https://api-qa-tollingbos.services.conduent.com/FPMSONE/payment/accountcheck
          fetch(resultURlAC, requestOptions as any)
            .then(response => response.text())
            .then((result: any) => {
              console.log(JSON.parse(result));
              let data = JSON.parse(result)
              if (data.status === false && data.message === "Declined: Account is blacklisted...!") {
                // setIsLoading(true);
                setAPIErrorMsg(JSON.parse(result).message)
                setApiStatus("error")
                // setTimeout(() => {
                setApiStatus("")
                setIsLoading(false);
                setAPIErrorMsg("")
                // }, 2000);
              }
            }).catch(error => console.log('error', error));
        } else {
        }
      })
      .catch(error => {
        debugger
      });
  }

  const validateAddress = (validateFiles: boolean) => {
    setIsPaymentModalVisible(false);
    // addPaymentType === "payTypesMaintance" ? setIsActiveAddPaymentModal(true) : null;
    // let setValidRoutingNumberData = false
    // if (validateFiles && routingNumber.length === 0) {
    //     setValidRoutingNumber(true)
    //     setValidRoutingNumberData = false
    // } else if (routingNumber.length === 9) {
    //     setValidRoutingNumber(false)
    //     setValidRoutingNumberData = true
    // } else if (validateFiles) {
    //     setValidRoutingNumber(true)
    //     setValidRoutingNumberData = false
    // }

    switch (paymentType) {
      case "creditCard":
        // if ((year.text).length === 0 || (new Date(`${(year.text)}-${month.text}-30`) < new Date()) || parseInt(month.text) > 12) {
        //     setValidateMessage(true)
        //     setPaymentSuccessMessage("Expiry date is always equal to greater than today's date")
        //     setTimeout(() => {
        //         setPaymentSuccessMessage("")
        //         setValidateMessage(false)
        //     }, 2000);
        // } else if (address1.length !== 0 &&
        //     city.length !== 0 &&
        //     state.key !== 0 &&
        //     country.key !== 0 &&
        //     zip.key !== 0 &&
        //     account.length !== 0 &&
        //     ((year.text).length !== 0 || (new Date(`${(year.text)}-${month.text}-30`) <= new Date()))) {
        //     if (cardList.length > 0 && (cardList[0].type === "CHECK")) {
        //         setValidateMessage(true)
        //         setPaymentSuccessMessage("Rebill paytype of cash/ Check is already available as a primary")
        //         setTimeout(() => {
        //             setPaymentSuccessMessage("")
        //             setValidateMessage(false)
        //         }, 2000);
        //     } else {
        // if (isEditMode && editCardData.tokenNumber !== account) {
        //     replenishmentProfileID("")
        // } else {
        //     profileId.length > 0 && cardList.length > 0 ? replenishmentUpdate(profileId, null) : replenishmentProfileID("");
        // }
        replenishmentUpdate(null);
        //     }
        // }
        break;
      case "ACH":
        // if (address1.length !== 0 &&
        //     city.length !== 0 &&
        //     state.key !== 0 &&
        //     country.key !== 0 &&
        //     zip.key !== 0 &&
        //     achAccountNumber.length > 5 &&
        //     achAccountNumber.length < 17 &&
        //     setValidRoutingNumberData &&
        //     (cardType === "CHECKING" || cardType === "SAVINGS")) {
        //     if (cardList.length > 0 && (cardList[0].type === "CHECK")) {
        //         setValidateMessage(true)
        //         setPaymentSuccessMessage("Rebill paytype of cash/ Check is already available as a primary")
        //         setTimeout(() => {
        //             setPaymentSuccessMessage("")
        //             setValidateMessage(false)
        //         }, 2000);
        //     } else {
        // if (isEditMode && editCardData.tokenNumber !== account) {
        //     onAchPay()
        // } else {
        //     profileId.length > 0 && cardList.length > 0 ? replenishmentUpdate(profileId, null) : onAchPay();
        // }
        replenishmentUpdate(null)
        //     }
        // }
        break;
      case "check":
        // if (checkNumber.length > 0) {
        replenishmentCashCheck()
        // }
        break;
      case "cash":
        replenishmentCashCheck()
        break;
      default: break;
    }
  }

  const validateBillingAddress = async (profileIDValue: string) => {
    // setValidate(true);

    if (enteredAddress1.length !== 0 &&
      enteredCity.length !== 0 &&
      enteredState.key !== 0 &&
      enteredCountry.key !== 0 &&
      (enteredZipPlusCode === undefined || enteredZipPlusCode.length === 4 || enteredZipPlusCode.length === 0) &&
      enteredZip.key !== 0) {
      setDisableValidateButton(true);
      //  setSuggestedAddress(true)
      setAddressType(false)
      setIsLoading(true);
      setApiStatus("loading");
      // setIsLoading(true);
      // setApiStatus("loading");
      // "https://api-qa-tollingbos.services.conduent.com/FPMS/MiscAPIs/addressValidation"
      let resultURl = await getURL(oauthToken, "ADD02") as any;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let APIURL = context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("URL"))[0].split(":")[1]
      // if (APIURL === "PERF") {
      //     myHeaders.append("Ocp-Apim-Subscription-Key", "3501fcd9b4e3418eb19e89556bc7ad0a");
      // } else {
      myHeaders.append("Authorization", "Bearer " + bearerToken);
      // }

      var raw = JSON.stringify({
        "source": "CRM",
        "addressLine1": isEditAddress ? defaultAddress.addressLine1 : enteredAddress1,
        "addressLine2": isEditAddress ? defaultAddress.addressLine2 : enteredAddress2,
        "city": isEditAddress ? defaultAddress.city : enteredCity,
        "state": isEditAddress ? defaultAddress.state : enteredState.key,
        "zipCode": isEditAddress ? defaultAddress.zipCode : enteredZip.key,
        "zipcodePlus": isEditAddress ? defaultAddress.zipCodePlus : enteredZipPlusCode,
        "country": isEditAddress ? defaultAddress.country : enteredCountry.key
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(resultURl, requestOptions as any)
        .then(response => response.text())
        .then((result: any) => {
          let data = JSON.parse(result)
          console.log(JSON.parse(result));

          if (data.status) {
            changeAddressType(false, data.result)
            setIsLoading(false);
            setApiStatus("");

            // addPaymentType !== "payTypesMaintance" ? setIsActiveAddPaymentModal(false) : null;
            setIsPaymentModalVisible(true);
            setDisableValidateButton(false);
            setExistingCreditCardToken(profileIDValue ? profileIDValue : account);
            setSuggestedAddress(true)

            // setTimeout(() => {
            //     setApiStatus("")
            //     setIsLoading(false);
            // }, 10000);
            setAddressIndicator(data.result.indicator)
            setSuggestedAddress1(data.result.address1)
            setSuggestedAddress2(data.result.address2)
            setSuggestedCity(data.result.city)
            setSuggestedZipPlusCode(data.result.zipcodePlus)
            setSuggestedState({ key: data.result.state, text: data.result.state })
            setSuggestedCountry({ key: data.result.country, text: data.result.country })
            setSuggestedZip({ key: data.result.zipcode, text: data.result.zipcode })
          } else {
            setIsLoading(false);
            setApiStatus("")
            notifyOutputChangedFunction(0, data.message);
          }

        }).catch(error => {
          setIsLoading(false);
          setApiStatus("");
          setDisableValidateButton(false);
          console.log('error', error)
        });
    } else {

    }
  }

  const resetDefaultAddress = () => {
    if (suggestedAddress) {
      setSuggestedAddress(false)
      changeAddressType(false, null)
    }
  }

  const changeAddressType = (state: boolean, data: any) => {
    setAddressType(state)
    if (state) {
      setAddress1(isEditAddress ? defaultAddress.addressLine1 : enteredAddress1)
      setAddress2(isEditAddress ? defaultAddress.addressLine2 : enteredAddress2)
      setCity(isEditAddress ? defaultAddress.city : enteredCity)
      // setEnteredZipPlusCode()
      setState(isEditAddress ? { key: defaultAddress.state, text: defaultAddress.state } : enteredState)
      setCountry(isEditAddress ? { key: defaultAddress.country, text: defaultAddress.country } : enteredCountry)
      setZip(isEditAddress ? { key: defaultAddress.zipCode, text: defaultAddress.zipCode } : enteredZip)
      return
    } else {
      setAddress1(data ? data.address1 : suggestedAddress1)
      setAddress2(data ? data.address2 : suggestedAddress2)
      setCity(data ? data.city : suggestedCity)
      // setEnteredZipPlusCode()
      setState(data ? { key: data.state, text: data.state } : suggestedState)
      setCountry(data ? { key: data.country, text: data.country } : suggestedCountry)
      setZip(data ? { key: data.zipcode, text: data.zipcode } : suggestedZip)
      return
    }
  }

  const addressComponent = () => {
    return (
      <div className="addressContainer positionRelative">
        {/* <div className="heading">Billing Address <img src={editSVG} onClick={() => setIsEditAddress(!isEditAddress)} /></div> */}
        <div className="heading">
          <span>Billing Address </span>
          {/* <input style={{ position: "absolute", top: "0px" }} type="checkbox" checked={isEditAddress} onChange={(i) => {
                        if (!isEditAddress) {
                            replenishment("", "", "", paymentType);
                            setIsEditAddress(!isEditAddress)
                        } else {
                            setIsEditAddress(!isEditAddress)
                        }

                    }} /> */}
          {!hideShippingAddress ? <><label className="CustomSwitch m-t-5">
            <input type="checkbox" checked={isEditAddress} onChange={(i) => {
              if (!isEditAddress) {
                // replenishment("", "", "", paymentType);
                setIsEditAddress(!isEditAddress)
              } else {
                setIsEditAddress(!isEditAddress)
              }

            }} />
            <span className="slider round"></span>
          </label>
            <span className="m-l-5">{`Use ${billingAddressType} Address`}</span></> : null}
        </div>

        {!isEditAddress ? <div className="addressBlock m-t-20">
          {/* {addressValidate && enteredZipPlusCode.length > 0 && enteredZipPlusCode.length !== 4 ? <label className="errorMessage ZipPlusNumberErrorMsg">Please enter valid ZipPlus4 Number</label> : null} */}
          <div>
            {/* {suggestedAddress ?
                            <div className="addressHeader displayFlex m-t-10 m-b-15">
                                <input type="radio" checked={addressType} onChange={() => changeAddressType(true)} />
                                <label className="m-l-10 m-t-5">Entered Address</label>
                            </div> : null} */}
            <div className="formRow positionRelative m-b-10 m-r-10">
              <label className="addressInputLabel">
                Address Line 1<br />
                <input
                  style={{ width: "114px" }}
                  type="text"
                  autoComplete="new-password"
                  className={validateAddressFields && enteredAddress1.length === 0 ? "form-control borderRed" : "form-control"}
                  value={enteredAddress1}
                  // placeholder="address1"
                  onChange={(e) => {
                    let reg = /^[a-zA-Z0-9\s_.-]*$/;
                    if (reg.test(e.target.value)) {
                      resetDefaultAddress()
                      setEnteredAddress1(e.target.value)
                    }
                  }}
                />
              </label>
            </div>
            <div className="formRow positionRelative m-b-10 m-r-10">
              <label className="addressInputLabel margin-0">
                Address Line 2<br />
                <input
                  style={{ width: "114px" }}
                  type="text"
                  className={"form-control"}
                  value={enteredAddress2}
                  // placeholder="address2"
                  onChange={(e) => {
                    let reg = /^[a-zA-Z0-9\s_.-]*$/;
                    if (reg.test(e.target.value)) {
                      resetDefaultAddress()
                      setEnteredAddress2(e.target.value)
                    }
                  }}
                />
              </label>
            </div>
            <div className="formRow positionRelative">
              <div className="formSubRow" style={{ display: "initial" }}>
                <label className="addressInputLabel">
                  Zip </label>
                <input
                  style={{ width: "114px" }}
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  value={enteredZip.text}
                  // onKeyDown={(evt) => (evt.key === 'e' || evt.key === 'E') && evt.preventDefault()}
                  // placeholder="City"
                  onChange={(e) => setEnteredZip({ key: 0, text: e.target.value, value: e.target.value, label: e.target.value, })}
                  onBlur={onChangeZip}
                />
                {/* <Select
                                    className={validateAddressFields && enteredZip.key === 0 ? "stateDropdown borderRed zipCodeDropdown m-t-5" : "form-control zipCodeDropdown m-t-5"}
                                    defaultValue={{ key: 0, text: '', value: "", label: "" }}
                                    onChange={onChangeZip}
                                    onInputChange={onInputZipChange}
                                    options={zipCode}
                                    value={enteredZip}
                                    menuPlacement="top"
                                /> */}
                {/* <Dropdown
                                    className={validateAddressFields && enteredZip.key === 0 ? "stateDropdown dropDownError zipCodeDropdown" : "form-control zipCodeDropdown"}
                                    // className="stateDropdown"
                                    label="Zip"
                                    selectedKey={enteredZip.key}
                                    onChange={onChangeZip}
                                    placeholder="Select an option"
                                    options={[{ key: 0, text: '' }, ...zipCode]}
                                /> */}
              </div>
            </div>
          </div>

          <div>
            <div className="formRow m-b-10">
              <label className="addressInputLabel m-r-10 disabledColor">
                City<br />
                <input
                  // style={{ width: "120px" }}
                  type="text"
                  autoComplete="off"
                  className={validateAddressFields && enteredCity.length === 0 ? "form-control borderRed inputDisabled" : "form-control inputDisabled"}
                  value={enteredCity}
                  disabled
                  // placeholder="City"
                  onChange={(e) => setEnteredCity(e.target.value)}
                />
              </label>
            </div>
            <div className="formRow positionRelative">
              <div className="formSubRow">
                {/* <Dropdown
                                    style={{ width: "70px" }}
                                    className={validateAddressFields && enteredState.key === 0 ? "stateDropdown dropDownError m-r-5" : "form-control m-r-5"}
                                    // className="stateDropdown"
                                    label="State"
                                    disabled
                                    selectedKey={enteredState.key}
                                    // onChange={onChangeCaseStatus}
                                    placeholder="Select an option"
                                    options={[{ key: 0, text: '' }, ...stateList]}
                                />
                                <Dropdown
                                    style={{ width: "70px" }}
                                    className={validateAddressFields && enteredCountry.key === 0 ? "stateDropdown dropDownError m-r-5" : "form-control m-r-5"}
                                    label="Country"
                                    disabled
                                    selectedKey={enteredCountry.key}
                                    // onChange={onChangeCountry}
                                    placeholder="Select an option"
                                    options={[{ key: 0, text: '' }, ...countryName]}
                                /> */}
              </div>
            </div>

            <div className="formRow positionRelative m-t-15">
              <label className="addressInputLabel">
                ZipPlus4<br />
                <input
                  // style={{ width: "88px" }}
                  type="number"
                  autoComplete="off"
                  className="form-control"
                  value={enteredZipPlusCode}
                  onKeyDown={(evt) => (evt.key === 'e' || evt.key === 'E') && evt.preventDefault()}
                  // placeholder="City"
                  onChange={(e) => {
                    resetDefaultAddress()
                    let ZipPlus = e.target.value
                    if (ZipPlus.length < 5) {
                      setEnteredZipPlusCode(e.target.value)
                    }
                  }}
                />

              </label>
            </div>
          </div>
        </div> : <div>
          <div className="defaultAddress">
            <label>{defaultAddress.addressLine1}</label>
            <label>{defaultAddress.addressLine2}</label>
            <label>{defaultAddress.city}</label>
            <label>{defaultAddress.state}</label>
            <label>{defaultAddress.country}</label>
            <label>{defaultAddress.zipCode + (defaultAddress.zipCodePlus ? ", " : "") + defaultAddress.zipCodePlus}</label>
          </div>
        </div>}
        {/* <div>
                    <button className="validateButton m-t-15" disabled={disableValidateButton} onClick={() => {
                        setAddressValidate(true)
                        setAalidateAddressFields(true)
                        validateBillingAddress()
                    }}>Validate</button>
                </div> */}
        {/* <div className="payContainer">
                        <button className="Button" onClick={resetAddress} >Cancel</button>
                        <button className="Button pay" onClick={() => {
                            setValidate(true);
                            validateAddress(true);
                        }} >{paymentViewTypeState === "ConvertAcccount" ? "Pay & Convert" : paymentViewTypeState === "AddFunds" ? `Pay $ ${amount ? amount : ""}` : "Make payment"}</button>

                    </div>} */}
      </div>
    )
  }

  const resetAddress = (editStatus: boolean, isChangePaymentTypes: boolean) => {
    // !isChangePaymentTypes ? generateCCUID("") : null;

    setIsEditAddress(true);
    setValidate(true);
    setAddressValidate(true);
    setValidateErrorMessage(true);
    setReplenishmentCall(false);
    setAalidateAddressFields(false);


    setCardType("");
    setRoutingNumber("");
    setAchAccountNumber("");

    setSuggestedAddress(false);
    setIFrameKey(iFrameKey + 1);
    setMaskedRoutingNumber("");
    // setEnteredAddress1("");
    // setEnteredAddress2("");
    // setEnteredCity("");
    // setEnteredZipPlusCode("");
    // setEnteredState({ key: 0, text: '' });
    // setEnteredCountry({ key: 0, text: '' });
    // setEnteredZip({ key: 0, text: '' });
    setSuggestedAddress1("");
    setSuggestedAddress2("");
    setSuggestedCity("");
    setSuggestedZipPlusCode("");
    setSuggestedState({ key: 0, text: '' });
    setSuggestedCountry({ key: 0, text: '' });
    setSuggestedZip({ key: 0, text: '' });
    setDisableValidateButton(false);
    setCheckNumber("");
    setExistingCreditCardToken("");
    // setCreditCardImage(discoveryCard);
    setEditCardData("");

    setMonth({ key: "", text: "", value: "", label: "" });
    setYear({ key: "", text: "", value: "", label: "" });
    editStatus ? setPrimaryCard(editCardData.isPrimary) : setPrimaryCard(cardList.length === 0 ? true : false);
    // editStatus ? setIsPrimaryDisabled(editCardData.isPrimary) : setIsPrimaryDisabled(cardList.length === 0 ? true : false);

    // editStatus ? setState({ key: 0, text: '' }) : null;
    // editStatus ? setCountry({ key: 0, text: '' }) : null;
    // editStatus ? setZip({ key: 0, text: 'Please select' }) : null;
    // editStatus ? setAddress1("") : null;
    // editStatus ? setAddress2("") : null;
    // editStatus ? setCity("") : null;
    // editStatus ? setFirstName("") : null;
    // editStatus ? setLastName("") : null;
    // editStatus ? setReplinshmentGuid("") : null;
    // editStatus ? setProfileId("") : null;
  }

  const onSelectPaytypeCard = (i: any) => {
    if (payTypeCard.ReplinshmentGuid === i.ReplinshmentGuid) {
      // setSelectedCard("");
      setPayTypeCard({
        "ReplinshmentGuid": "",
        "billingAddressLine1": "",
        "billingAddressLine2": "",
        "city": "",
        "state": "",
        "zipcode": "",
        "country": "",
        "type": "",
        "tokenNumber": ""
      })
      setProfileId("");
      resetAddress(true, false);
    } else {
      // setPayTypeCard(i)
      setAddress1(i.billingAddressLine1)
      setAddress2(i.billingAddressLine2)
      setCity(i.city)
      setState({ key: i.state, text: i.state })
      setCountry({ key: i.country, text: i.country })
      setZip(i.zipcode);
      // setFirstName(i.firstName);
      // setMonth({ key: i.creditCardExpMonth, text: i.creditCardExpMonth })
      // setYear({ key: i.creditCardExpirationYear, text: i.creditCardExpirationYear })
      // setAccount(i.tokenNumber)
      // setCardType(i.type)
      // setCheckNumber(e.target.value)
    }
  }

  // const expireDateCheck = () => {
  //   if (new Date(`${year.text}-${month.text}-${lastDay} 24:00:00`) < new Date(`${fullYear}-${fullMonth}-${todayFullDate.getDate()} ${todayFullDate.getHours()}:${todayFullDate.getMinutes()}:${todayFullDate.getSeconds()}`)) {
  //     return true
  //   } else {
  //     false
  //   }
  // }

  const getcardMaskValue = (type: string) => {
    // if (type === "AMEX") {
    //     return "XXXX XXXX XXX "
    // } else if (type === "DISCOVER") {
    //     return "XXXX XXXX XX "
    // } else {
    return "XXXX XXXX XXXX "
    // }

  }

  const paymentDOM = () => {
    return <>
      <div className="paymentTypes">
        {pptView && addPaymentType !== "payTypesMaintance" ? <>
          <div className="option PrimaryCardOption displayFlex pptOption">
            <label className={"CustomSwitch m-t-5"} style={{ height: "15px", width: "27px" }}>
              <input type="checkbox" checked={ppt} onChange={() => pptValidate()} />
              <span className="slider round"></span>
            </label>
            <label className="m-l-5">Pay per Trip</label>
          </div>
        </> : null}
        {addPaymentType === "payTypesMaintance" && isEditMode ? <>
          <div data-class={isDisabledCreditCard} className={paymentType === "creditCard" ? "active paymentcard" : "paymentcard"} onClick={() => onPaytypeSelect("creditCard")}>
            {/* <img src={(paymentType === "creditCard") ? newCreditCardSelected : newCreditCard} alt="newCreditCard" /> */}
            <span>Credit Card</span>
          </div>
          <div data-class={isDisabledACH} className={paymentType === "ACH" ? "active paymentcard" : "paymentcard"} onClick={() => onPaytypeSelect("ACH")}>
            {/* <img src={(paymentType === "ACH") ? newACHSelected : newACH} alt="newACH" /> */}
            <span>ACH</span>
          </div>
          {/* <div data-class={isDisabledCheck} className={paymentType === "check" ? "active paymentcard" : "paymentcard"} onClick={() => isDisabledCheck ? null : changePaymentTypesValidate("check")}>
                        <img src={(paymentType === "check") ? checkSelected : check} alt="check" />
                        <span>Check</span>
                    </div> */}
        </> : <>
          {/* <div data-class={isDisabledCreditCard} className={paymentType === "creditCard" ? "active paymentcard" : "paymentcard"} onClick={() => onPaytypeSelect("creditCard")}>
                        <img src={(paymentType === "creditCard") ? newCreditCardSelected : newCreditCard} alt="newCreditCard" />
                        <span>Credit Card</span>
                    </div>
                    <div data-class={isDisabledACH} className={paymentType === "ACH" ? "active paymentcard" : "paymentcard"} onClick={() => onPaytypeSelect("ACH")}>
                        <img src={(paymentType === "ACH") ? newACHSelected : newACH} alt="newACH" />
                        <span>ACH</span>
                    </div> */}
          {/* <div data-class={isDisabledCheck} className={paymentType === "check" ? "active paymentcard" : "paymentcard"} onClick={() => isDisabledCheck ? null : changePaymentTypesValidate("check")}>
                        <img src={(paymentType === "check") ? checkSelected : check} alt="check" />
                        <span>Check</span>
                    </div> */}
        </>}
      </div>

      {paymentType === "creditCard" ? <div style={{ height: addPaymentType === "payTypesMaintance" ? "255px" : "220px" }} className="creditCardContainerPayment Address">
        <div onClick={() => {
          // disablePayment ? notifyOutputChangedFunction(0, "You already have 4 Payment methods saved. Please remove one and try again.") : null
        }} className={!disablePayment ? "" : "paymentDisabled"} />
        <div className="m-l-5">
          <div className="creditCard m-l-10">
            {/* {validateErrorMessage &&
                            ((year.text).length === 0 ||
                                new Date(`${year.text}-${month.text}-30`) <= new Date() ||
                                account.length === 0 ||
                                firstName.length === 0 ||
                                lastName.length === 0
                            ) ? <div className='yearErrorMessage'>Please enter valid details</div> : null} */}
            {/* <label className="addressInputLabel">Credit Card </label> */}
            {/* {existingCreditCardToken.length != 0 ? <input
                            type="text"
                            style={{ width: "228px" }}
                            className="form-control creditCardToken fullWidth m-t-5"
                            value={`XXXX XXXX XXXX ${existingCreditCardToken.substr(existingCreditCardToken.length - 4)}`}
                            placeholder="toekn"
                            // disabled
                            onClick={() => {
                                setCardType("");
                                setAccount("");
                                setExistingCreditCardToken("");
                            }}
                        /> : null} */}
            {/* <iframe
                            id="tokenframe"
                            name="tokenframe"
                            className="creditCardIframe"
                            // key={iFrameKey}
                            src={"https://conduent-uat.cardconnect.com/itoke/ajax-tokenizer.html?maskfirsttwo=true&cardinputmaxlength=16&sendcardtypingevent=true&css=.error%7Bborder%3A1px%20solid%20%23ff0000%3B%7Dinput%7Bborder%3A1px%20solid%20%23babec4%3Bheight%3A12px%3Bwidth%3A228px%3Bpadding%3A6px%208px%7D%26amp%3Bformatinput%3Dtrue%26amp%3Binvalidinputevent%3Dtrue" + iFrameKey}
                        // src="https://conduent-uat.cardconnect.com/itoke/ajax-tokenizer.html??sendcardtypingevent=true&css=input%7Bborder%3A1px%20solid%20%23babec4%3Bheight%3A12px%3Bwidth%3A228px%3Bpadding%3A6px%208px%7Dcss%3D.error%7Bcolor%3Ared%3Bborder-color%3Ared%3B%7D%26amp%3Bformatinput%3Dtrue%26amp%3Binvalidinputevent%3Dtrue"
                        ></iframe> */}
            {/* {paymentType === "creditCard" && validate && account.length === 0 ? <label className="errorMessage invalidCardNumber">Please enter valid card number</label> : null} */}

            <div id="secureFrameWrapper">
              {existingCreditCardToken.length != 0 ? <> <label className="addressInputLabel m-l-5">Credit Card </label>
                <input
                  type="text"
                  style={{ width: "228px" }}
                  className="form-control creditCardToken fullWidth m-t-5"
                  value={getcardMaskValue(cardType) + lastDigits}
                  placeholder="toekn"
                  // disabled
                  onClick={() => {
                    setCardType("");
                    setAccount("");
                    setExistingCreditCardToken("");
                    generateCCUID(bearerToken)
                  }}
                />
                <div className="displayFlex creditCardMonthYear positionRelative m-t-35 m-l-5">
                  <div>
                    <label className="addressInputLabel">
                      Month </label>
                    {/* <Select
                                            isDisabled={true}
                                            // className={validate && (month.text.length === 0 || ((new Date(`${year.text}-${month.text}-30 24:00:00`) < new Date()))) ? "monthDropDown borderRed m-t-5 m-r-10" : "form-control monthDropDown m-t-5 m-r-10"}
                                            className={"form-control monthDropDown m-r-10"}
                                            defaultValue={MonthList[0]}
                                            onChange={(i: { value: string | any[]; }) => {
                                                if (i.value.length < 3) {
                                                    setMonth({ key: i.value, text: i.value, value: i.value, label: i.value })
                                                }
                                            }}
                                            onInputChange={(input: any, reason: any) => onInputMonthYearChange(input, reason, "month")}
                                            options={MonthList.filter((i: any) => i.value)}
                                            value={month}
                                            menuPlacement="auto"
                                        /> */}
                  </div>
                  <div>
                    <label className="addressInputLabel">
                      Year </label>
                    {/* <Select
                                            isDisabled={true}
                                            className={"form-control monthDropDown"}
                                            defaultValue={yearList[0]}
                                            onChange={(i: { value: string | any[]; }) => {
                                                if (i.value.length < 5) {
                                                    setYear({ key: i.value, text: i.value, value: i.value, label: i.value })
                                                }
                                            }}
                                            onInputChange={(input: any, reason: any) => onInputMonthYearChange(input, reason, "year")}
                                            options={yearList.filter((i: any) => i.value)}
                                            value={year}
                                            menuPlacement="auto"
                                        /> */}
                  </div>
                </div>
              </> : null}
              {paymentMethod === "CC" && existingCreditCardToken.length === 0 ?
                <iframe id="secureFrame" className="secureFrame"
                  height="132px" width="283px"
                  key={iFrameKey}
                  onLoad={handleIframeLoad}
                  src={"https://chase-var.hostedpaymentservice.net/hpf/?uid=" + creditCardUID}>
                </iframe> : null}
              <input
                onChange={(e) => {
                  setUID(e.target.value);
                  // window.completePayment() = completePaymentData;
                  (window as any).hpfReady = hpfReady;
                (window as any).completePayment = completePayment;
                (window as any).scrollRelay = scrollRelay;
                (window as any).handlePaymentErrors = handlePaymentErrors;
                (window as any).startPayment = startPayment;
                (window as any).cancelPayment = cancelPayment;
                  // iframeRef.current.addEventListener("message", handleMessage);
                }}
              ></input>
              {paymentMethod === "" ? <div className="chaseLoader"> <div className="nb-spinner"></div></div> : null}
            </div>

            <div className="formRow positionRelative m-b-5" style={{ marginTop: "-33px" }}>
              <label className="addressInputLabel">
                First Name<br />
                <input
                  style={{ width: "228px" }}
                  type="text"
                  autoComplete="new-password"
                  className={validate && firstName.length === 0 ? "form-control borderRed m-t-5" : "form-control fullWidth m-t-5"}
                  value={firstName}
                  // placeholder="address1"
                  onChange={(e) => {
                    let reg = /^[a-zA-Z,.'_ ]*$/;
                    if (reg.test(e.target.value) && e.target.value.length < 41) {
                      setFirstName(e.target.value)
                    }
                  }}
                />
              </label>
            </div>

            <div className="formRow positionRelative m-r-10">
              <label className="addressInputLabel">
                Last Name<br />
                <input
                  style={{ width: "228px" }}
                  type="text"
                  autoComplete="new-password"
                  className={validate && lastName.length === 0 ? "form-control borderRed m-t-5" : "form-control fullWidth m-t-5"}
                  value={lastName}
                  // placeholder="address1"
                  onChange={(e) => {
                    let reg = /^[a-zA-Z,.'_ ]*$/;
                    if (reg.test(e.target.value) && e.target.value.length < 41) {
                      setLastName(e.target.value)
                    }
                  }}
                />
              </label>
            </div>
            {/* <div className={"allCard " + cardType} style={{ display: "none" }} ><img src={allCards} />  </div> */}
          </div>

          <div className="additionalCreditCardOptions">
            <div className="option PrimaryCardOption displayFlex">
              <label className={(cardList.length === 0 || (isPrimaryDisabled && isEditMode) || ppt) ? "CustomSwitch disabled m-t-5" : "CustomSwitch m-t-5"}>
                <input type="checkbox" disabled={(cardList.length === 0 || (isPrimaryDisabled && isEditMode) || ppt)} checked={cardList.length === 0 || primaryCard || (isPrimaryDisabled && isEditMode)} onChange={() => setPrimaryCard(!primaryCard)} />
                <span className="slider round"></span>
              </label>
              <label className="m-l-5">Make this as a primary </label>
            </div>
          </div>
        </div>
        {addressComponent()}
      </div> : null}

      {paymentType === "ACH" ? <div style={{ height: addPaymentType === "payTypesMaintance" ? "255px" : "220px" }} className="creditCardContainerPayment ACH">
        <div className="positionRelative">
          {/* {/* {cardType === "SAVINGS" || cardType === "CHECKING" ?  */}
          <>
            <div className="creditCard">
              <div id="secureFrameWrapper">
                {paymentMethod === "" ? <div className="chaseLoader"> <div className="nb-spinner"></div></div> : null}
                {existingCreditCardToken.length != 0 ? <> <div className="formRow positionRelative m-b-5 m-t-5">
                  <label className="addressInputLabel">
                    ACH Account Number<br />
                    <input
                      type="text"
                      // disabled
                      // style={{ width: "228px" }}
                      className={"form-control fullWidth m-t-5"}
                      value={getcardMaskValue(cardType) + lastDigits}
                      min="20" max="30"
                      onClick={() => {
                        setCardType("");
                        setAccount("");
                        setExistingCreditCardToken("");
                        generateAchUID(bearerToken);
                      }}
                    />
                  </label>
                </div> </> : null}
                {paymentMethod === "ACH" && existingCreditCardToken.length === 0 ?
                  <iframe id="secureFrame" className="secureFrame"
                    height="132px" width="283px"
                    key={iFrameKey}
                    src={"https://chase-var.hostedpaymentservice.net/hpf/?uid=" + achUID}>
                  </iframe> : null}
                <input
                  onChange={(e) => {
                    setUID(e.target.value);
                    // window.completePayment() = completePaymentData;
                    (window as any).hpfReady = hpfReady;
                    (window as any).completePayment = completePayment;
                    (window as any).scrollRelay = scrollRelay;
                    (window as any).handlePaymentErrors = handlePaymentErrors;
                    (window as any).startPayment = startPayment;
                    (window as any).cancelPayment = cancelPayment;
                    // iframeRef.current.addEventListener("message", handleMessage);
                  }}
                ></input>
              </div>

              <div className="formRow alignCenter positionRelative m-b-5 m-t-5">
                <label className="addressInputLabel m-r-5">
                  First Name<br />
                  <input
                    // style={{ width: "228px" }}
                    type="text"
                    autoComplete="new-password"
                    className={validate && firstName.length === 0 ? "form-control borderRed m-t-5" : "form-control fullWidth m-t-5"}
                    value={firstName}
                    // placeholder="address1"
                    onChange={(e) => {
                      let reg = /^[a-zA-Z,.'_ ]*$/;
                      if (reg.test(e.target.value) && e.target.value.length < 41) {
                        setFirstName(e.target.value)
                      }
                    }}
                  />
                </label>
                <label className="addressInputLabel m-l-5">
                  Last Name<br />
                  <input
                    // style={{ width: "228px" }}
                    type="text"
                    autoComplete="new-password"
                    className={validate && lastName.length === 0 ? "form-control borderRed m-t-5" : "form-control fullWidth m-t-5"}
                    value={lastName}
                    // placeholder="address1"
                    onChange={(e) => {
                      let reg = /^[a-zA-Z,.'_ ]*$/;
                      if (reg.test(e.target.value) && e.target.value.length < 41) {
                        setLastName(e.target.value)
                      }
                    }}
                  />
                </label>
              </div>
            </div>
            <div className="additionalCreditCardOptions">

              <div className="option PrimaryCardOption displayFlex">
                <label className={(cardList.length === 0 || (isPrimaryDisabled && isEditMode) || ppt) ? "CustomSwitch disabled m-t-5 m-l-0 " : "CustomSwitch m-t-5 m-l-0 "}>
                  <input type="checkbox" disabled={(cardList.length === 0)} checked={cardList.length === 0 || primaryCard || (isPrimaryDisabled && isEditMode) || ppt} onChange={() => setPrimaryCard(!primaryCard)} />
                  <span className="slider round"></span>
                </label>
                <label className="m-l-5">Make this as a primary </label>
              </div>
            </div> </>
          {/* // : <div className="defaultCard">   <img src={newACHSelected} /> </div>} */}
        </div>
        {addressComponent()}
      </div> : null}

      {paymentType === "check" ? <div style={{ height: addPaymentType === "payTypesMaintance" ? "255px" : "220px" }} className="creditCardContainerPayment check">
        <div className='checkNumberBlock m-r-20 m-l-20 p-t-30'>
          {/* <img style={{ width: "90px" }} src={check} /> */}
          {/* <label className='bold m-b-10'>Check Number</label> <br />
                    <input
                        type="number"
                        className={validate && checkNumber.length === 0 ? "form-control  borderRed  m-t-10" : "form-control  m-t-10"}
                        value={checkNumber}
                        onChange={(e) => setCheckNumber(e.target.value)}
                    /> */}
          {/* {validate && checkNumber.length !== 6 ? <div className="errorMessage routingNumberErrorMsg">Please enter valid details</div> : null} */}
        </div>
        <div className={addPaymentType === "payTypesMaintance" ? "payContainer payButton" : " payContainer customPayButton"}>
          {addPaymentType === "payTypesMaintance" ? <button className="additionalValidateButton cancelButton" onClick={() => {
            replenishment("", accountNumber, accountGuid, "");
            setIsActiveAddPaymentModal(false)
            setIFrameKey(iFrameKey + 1);
          }} >Cancel</button> : null}
          <button className="validateButton m-t-15 m-r-20" onClick={() => {
            setValidate(true);
            validateAddress(true);
          }}
          // disabled={checkNumber.length === 0}
          >Save Details</button>
        </div>
      </div> : null}


      {paymentType === "creditCard" || paymentType === "ACH" ? <div className={addPaymentType === "payTypesMaintance" ? "payContainer payButton" : " payContainer customPayButton"}>
        {addPaymentType === "payTypesMaintance" || isEditMode ? <button className="additionalValidateButton cancelButton" onClick={cancelACHCCPaymentModal}
        >Cancel</button> : null}
        <button className="validateButton m-t-15 m-r-20" disabled={
          paymentType === "creditCard" ?
            !(enteredAddress1.length !== 0 &&
              enteredCity.length !== 0 &&
              enteredState.key !== 0 &&
              enteredCountry.key !== 0 &&
              enteredZip.key !== 0 &&
              // year.text.length !== 0 &&
              firstName.length !== 0 &&
              lastName.length !== 0
              // account.length !== 0 &&
              // (!(new Date(`${year.text}-${month.text}-30`) < new Date())) &&
              // month.text.length !== 0
            ) || isPaymentModalVisible :
            !(enteredAddress1.length !== 0 &&
              enteredCity.length !== 0 &&
              enteredState.key !== 0 &&
              enteredCountry.key !== 0 &&
              enteredZip.key !== 0 &&
              firstName.length !== 0 &&
              lastName.length !== 0
              // (routingNumber.length === 9) &&
              // (achAccountNumber.length > 4)
            ) || isPaymentModalVisible
        } onClick={() => {
          if (isEditMode && existingCreditCardToken.length > 0 && !(editCardData.zipcode !== enteredZip.text || editCardData.billingAddressLine1 !== enteredAddress1 || editCardData.billingAddressLine2 !== enteredAddress2 || editCardData.zipplus4 !== enteredZipPlusCode)) {

            changeAddressType(true, null)
            // setTimeout(() => {
            setValidate(true);
            validateAddress(true);
            setExistingCreditCardToken(account);

            // }, 1000);
          } else {
            // getToken()
            if (existingCreditCardToken.length != 0) {
              let isExitingCard = cardList.filter((i: any) => i.lastfourdigits === lastDigits && i.type === cardType)

              if (isExitingCard.length > 0) {
                notifyOutputChangedFunction(0, "You have saved this Payment method already.")
                paymentType === "ACH" ? generateAchUID("") : generateCCUID("")

              } else {
                setAddressValidate(true)
                setAalidateAddressFields(true)
                // setExistingCreditCardToken(account);
                validateBillingAddress("")
              }
            } else {
              getToken()
            }



            // setAddressValidate(true)
            // setAalidateAddressFields(true)
            // setExistingCreditCardToken(account);
            // validateBillingAddress("")

          }


        }}>Save Details</button>

      </div> : null}

    </>
  }

  return (<div style={{ height: containerHeight + "px" }} className='positionRelative'> {apiStatus === "" && isScriptLoaded ?
    <div style={{ display: "flow-root" }} className="payment addPayment">
      {addPaymentType === "payTypesMaintance" ? <>
        <div className="alignEnd m-t-15">
          {pptView ? <>
            <div className="option PrimaryCardOption displayFlex pptOption m-r-20">
              <label className={"CustomSwitch m-t-5"} style={{ height: "15px", width: "27px" }}>
                <input type="checkbox" checked={ppt} onChange={() => pptValidate()} />
                <span className="slider round"></span>
              </label>
              <label className="m-l-5">Pay per Trip</label>
            </div>
          </> : null}
          <button className="validateButton" onClick={() => {
            generateCCUID(bearerToken)
            setIsActiveAddPaymentModal(!isActiveAddPaymentModal)
          }
          }>Add payment method</button>
        </div>
        {isActiveAddPaymentModal ? <div className="paymentContainer addPaymentModal">
          <div className="paymentModal">
            <div className="modalHeader">
            </div>
            <div className="modalBody">
              {paymentDOM()}
            </div>
          </div>
        </div> : null}
      </> : paymentDOM()}
      {/* {paymentType === "cash" || paymentType === "check" ? <div className="payContainer">
            <button className="Button pay" onClick={() => {
                setValidate(true);
                validateAddress(true);
            }} >Pay & Convert</button>
        </div> : null} */}
      {/* {validateMessage ?
            <div className="validationMessage alignCenter">
                <div className="accountPaymentSuccessful">
                    <h2>{paymentSuccessMessage}</h2>
                </div>
            </div> : null} */}
      {isPaymentModalVisible ? <div className="paymentContainer addressModal">
        <div className="paymentModal">
          <div className="modalHeader">
          </div>
          <div className="modalBody  addressValidationContainer">
            <div className="formRow displayFlex textAlignRight m-r-20">
              <input style={{ marginLeft: "90px" }} type="radio" checked={addressType} onChange={() => changeAddressType(true, null)} />
              <label className="m-l-10 m-t-5 addressTitle">Entered Address</label><br />
              <input style={{ marginLeft: "90px" }} type="radio" checked={!addressType} onChange={() => changeAddressType(false, null)} />
              <label className="m-l-10 m-t-5 addressTitle">Suggested Address</label><br />
            </div>
            <div className="addressRow displayFlex">
              <div className="Label">Address Line 1 :</div>
              <div className="details">{isEditAddress ? defaultAddress.addressLine1 : enteredAddress1}</div>
              <div className="details">{suggestedAddress1}</div>
            </div>

            <div className="addressRow displayFlex">
              <div className="Label">Address Line 2 :</div>
              <div className="details">{isEditAddress ? defaultAddress.addressLine2 : enteredAddress2}</div>
              <div className="details">{suggestedAddress2}</div>
            </div>

            <div className="addressRow displayFlex">
              <div className="Label">City :</div>
              <div className="details">{isEditAddress ? defaultAddress.city : enteredCity}</div>
              <div className="details">{suggestedCity}</div>
            </div>


            <div className="addressRow displayFlex">
              <div className="Label">State:</div>
              <div className="details">{isEditAddress ? defaultAddress.state : enteredState.text}</div>
              <div className="details">{suggestedState.text}</div>
            </div>

            <div className="addressRow displayFlex">
              <div className="Label">Country:</div>
              <div className="details">{isEditAddress ? defaultAddress.country : enteredCountry.text}</div>
              <div className="details">{suggestedCountry.text}</div>
            </div>


            <div className="addressRow displayFlex">
              <div className="Label">Zip Code :</div>
              <div className="details">{isEditAddress ? defaultAddress.zipCode : enteredZip.text}</div>
              <div className="details">{suggestedZip.text}</div>
            </div>

            {/* <div className="addressRow displayFlex">
                            <div className="Label">Zip Plus 4:</div>
                            <div className="details">{isEditAddress ? defaultAddress.zipCodePlus : enteredZipPlusCode}</div>
                            <div className="details">{suggestedZipPlusCode}</div>
                        </div> */}
            <div className="addressVerticalLine"></div>

            {/* <div className="formRow textAlignRight">
                            <label className="m-l-10 m-t-5 bold"></label><br /><br />
                            <label>Address Line 1 :</label><br />
                            <label>Address Line 2 :</label><br />
                            <label>City :</label><br />
                            <label>State:</label><br />
                            <label>Country:</label><br />
                            <label>Zip Code :</label><br />
                            <label>Zip Plus 4:</label><br />
                        </div>
                        <div className="formRow textAlignRight m-r-20">
                            <input type="radio" checked={addressType} onChange={() => changeAddressType(true, null)} />
                            <label className="m-l-10 m-t-5 bold">Entered Address</label><br />
                            <div title={isEditAddress ? defaultAddress.addressLine1 : enteredAddress1} className="paymentModalTitle">{isEditAddress ? defaultAddress.addressLine1 : enteredAddress1}</div>
                            <div title={isEditAddress ? defaultAddress.addressLine2 : enteredAddress2} className="paymentModalTitle">{isEditAddress ? defaultAddress.addressLine2 : enteredAddress2}</div>
                            <label>{isEditAddress ? defaultAddress.city : enteredCity}</label><br />
                            <label>{isEditAddress ? defaultAddress.zipCodePlus : enteredZipPlusCode}</label><br />
                            
                            <label>{isEditAddress ? defaultAddress.country : enteredCountry.text}</label><br />
                            <label>{isEditAddress ? defaultAddress.zipCode : enteredZip.text}</label><br />
                        </div>
                        <div className="formRow positionRelative m-l-20 p-l-20">
                            <div className="formRow verticalLine">
                                <input type="radio" checked={!addressType} onChange={() => changeAddressType(false, null)} />
                                <label className="m-l-10 m-t-5 bold">Suggested Address</label><br />
                                <div title={suggestedAddress1} className="paymentModalTitle">{suggestedAddress1}</div>
                                <div title={suggestedAddress2} className="paymentModalTitle">{suggestedAddress2}</div>
                                <label>{suggestedCity}</label><br />
                                <label>{suggestedZipPlusCode}</label><br />
                                <label>{suggestedState.text}</label><br />
                                <label>{suggestedCountry.text}</label><br />
                                <label>{suggestedZip.text}</label><br />
                            </div>
                        </div> */}

          </div>
          <div className="modalFooter">
            <div className="alignCenter">
              <button className="Button cancelButton" onClick={() => {
                // addPaymentType === "payTypesMaintance" ? setIsActiveAddPaymentModal(true) : null
                setIsPaymentModalVisible(false)
              }
              } >Cancel</button>
              <button className="Button pay" onClick={() => {
                if (addressIndicator === "INVALID") {
                  let confirmationModal = (window as any).confirm("Address validation failed, Click OK to continue with the provided Address");
                  if (confirmationModal) {
                    setValidate(true);
                    validateAddress(true);
                  }
                } else {
                  setValidate(true);
                  validateAddress(true);
                }

              }} >Save Details</button>
            </div>
          </div>
        </div>
      </div> : null}

      {isDeleteConfirmationModal.isVisible ? <div className="paymentContainer">
        <div className="deleteConfirmationModal">
          <div className="modalHeader alignCenter m-b-10">
            Deletion Alert
          </div>
          <div className="modalBody alignCenter m-b-20">
            Are you sure you want to delete replenishment?

          </div>
          <div className="modalFooter">
            <div className="alignCenter">
              <button className="additionalValidateButton cancelButton" onClick={() => {
                setIsDeleteConfirmationModal({
                  isVisible: false,
                  redord: {}
                })
              }
              } >Cancel</button>
              <button className="Button pay" onClick={() => {
                deleteSelectedCard(isDeleteConfirmationModal.redord)
              }} >Delete</button>
            </div>
          </div>
        </div>
      </div> : null}

      <div style={{ marginTop: addPaymentType === "payTypesMaintance" ? 50 : 0 }} className="payTypes addCardAddress">
        <span className="payTypesHeading m-l-15">Saved Payment Methods</span>
        <div className="cardList m-t-20">
          {/* {cardList.filter((i: any) => i.isRecurring).length > 0 ? cardList.map((i: any) => {
                        let savedCards = i.isRecurring;
                        let cardImage = masterCardMini
                        let type = "CC"
                        if (i.type === "MASTERCARD") {
                            cardImage = masterCardMini
                            type = "CC"
                        } else if (i.type === "VISA") {
                            cardImage = visaCard
                            type = "CC"
                        } else if (i.type === "DISCOVER") {
                            cardImage = discoveryCard
                            type = "CC"
                        } else if (i.type === "AMEX") {
                            cardImage = AMEXCard
                            type = "CC"
                        } else if (i.type === "SAVINGS" || i.type === "CHECKING") {
                            cardImage = ACHCard
                            type = "ACH"
                        } else {
                            cardImage = check
                            type = "CHECK"
                        }
                        return <div key={i.tokenNumber} className={(i.isRecurring) ? "SelectionCard " + type : "SelectionCard hide " + type}>
                            <div className="SelectionCardTitle">
                                {i.order === 1 ? <div className="SelectionCardText">Primary</div> : null}
                                {i.order === 2 ? <div className="SelectionCardText">Secondary</div> : null}
                                {i.order === 3 ? <div className="SelectionCardText">Tertiary - 1</div> : null}
                                {i.order === 4 ? <div className="SelectionCardText">Tertiary - 2</div> : null}
                                <span className='cardActions'>
                                    {type != "CHECK" ? <img src={activeEditSVG} onClick={() => editSelectedCard(i)} /> : null}
                                    <img onClick={() => setIsDeleteConfirmationModal({
                                        isVisible: true,
                                        redord: i
                                    })} src={activeDeleteSVG} />
                                </span>
                            </div>

                            <div onClick={() => onSelectPaytypeCard(i)}
                                className={payTypeCard.ReplinshmentGuid === i.ReplinshmentGuid ? "active card" : "card"}>
                                {type !== "CHECK" ? <div className="cardNumber">{getcardMaskValue(i.type) + i.lastfourdigits}</div> : null}
                                <div className="cardType">{i.type}</div>
                                {ppt && i.order === 1 ? <div className="pptLabel">PPT</div> : null}
                                <div className="fullName"><abbr title={i.firstName + " " + i.lastName}>{i.firstName + " " + i.lastName}</abbr></div>
                                {type === "CC" ? <div className="expire">{`${i.creditCardExpMonth} / ${i.creditCardExpirationYear}`}</div> : null}
                                <img src={cardImage} />
                            </div>
                        </div>
                        // }
                    }) : <div style={{ flexDirection: "column" }} className='fullWidth alignCenter'>
                        <img style={{ width: "90px" }} src={newCreditCardSelected} />
                        <span style={{ fontWeight: 400 }} className="payTypesHeading">No Payment Methods to display</span>
                    </div>} */}

        </div>
        {/* {payTypeCard.country !== "" ? <div className='cardAddress m-t-5'>
                <div className='m-r-10'>Address:</div>
                <div className='m-r-10'>{payTypeCard.billingAddressLine1 + ","}</div>
                <div className='m-r-10'>{payTypeCard.billingAddressLine2 + ","}</div>
                <div className='m-r-10'>{payTypeCard.city + ","}</div>
                <div className='m-r-10'>{payTypeCard.state + ","}</div>
                <div className='m-r-10'>{payTypeCard.zipcode + ","}</div>
                <div>{payTypeCard.country}</div>
            </div> : null} */}
      </div>

      {addPaymentType === "payTypesMaintance" ? <div style={{ marginTop: "55px" }} className="payTypes addCardAddress">
        <span className="payTypesHeading m-l-15">Saved Cards</span>
        <div className="cardList m-t-20">
          {/* {cardList.filter((i: any) => !i.isRecurring).length > 0 ? cardList.map((i: any) => {
                        // if (i.isPrimary) {
                        //     notifyOutputChangedFunction(i.type);
                        // }
                        let savedCards = i.isRecurring;
                        let cardImage = masterCardMini
                        let type = "CC"
                        if (i.type === "MASTERCARD") {
                            cardImage = masterCardMini
                            type = "CC"
                        } else if (i.type === "VISA") {
                            cardImage = visaCard
                            type = "CC"
                        } else if (i.type === "DISCOVER") {
                            cardImage = discoveryCard
                            type = "CC"
                        } else if (i.type === "AMEX") {
                            cardImage = AMEXCard
                            type = "CC"
                        } else if (i.type === "SAVINGS" || i.type === "CHECKING") {
                            cardImage = ACHCard
                            type = "ACH"
                        } else {
                            cardImage = check
                            type = "CHECK"
                        }
                        return <div key={i.tokenNumber} className={!(i.isRecurring) ? "SelectionCard " + type : "SelectionCard hide " + type}>
                            <div className="SelectionCardTitle">
                                <div>
                                    {i.isPrimary ? " " : " "}
                                </div>


                                <span className='cardActions'>
                                    {type != "CHECK" ? <img src={editSVG} onClick={() => editSelectedCard(i)} /> : null}
                                    <img onClick={() => deleteSelectedCard(i)} src={activeDeleteSVG} />
                                </span>
                            </div>

                            <div onClick={() => onSelectPaytypeCard(i)}
                                className={payTypeCard.ReplinshmentGuid === i.ReplinshmentGuid ? "active card" : "card"}>
                                <div className="cardNumber">{getcardMaskValue(i.type) + i.lastfourdigits}</div>
                                <div className="cardType">{i.type}</div>
                                <div className="fullName"><abbr title={i.firstName + " " + i.lastName}>{i.firstName + " " + i.lastName}</abbr></div>
                                <div className="expire">{`${i.creditCardExpMonth} / ${i.creditCardExpirationYear}`}</div>
                                <img src={cardImage} />
                            </div>
                        </div>
                        // }
                    }) :
                        <div style={{ flexDirection: "column" }} className='fullWidth alignCenter'>
                            <img style={{ width: "90px" }} src={newCreditCardSelected} />
                            <span style={{ fontWeight: 400 }} className="payTypesHeading">No Saved Cards to display</span>
                        </div>} */}
        </div>
        {/* {payTypeCard.country !== "" ? <div className='cardAddress m-t-5'>
                <div className='m-r-10'>Address:</div>
                <div className='m-r-10'>{payTypeCard.billingAddressLine1 + ","}</div>
                <div className='m-r-10'>{payTypeCard.billingAddressLine2 + ","}</div>
                <div className='m-r-10'>{payTypeCard.city + ","}</div>
                <div className='m-r-10'>{payTypeCard.state + ","}</div>
                <div className='m-r-10'>{payTypeCard.zipcode + ","}</div>
                <div>{payTypeCard.country}</div>
            </div> : null} */}
      </div> : null}
    </div > : <>
      {/* {apiStatus === "success" ? <div className="paymentSuccessful">
            <h2>{paymentSuccessMessage}</h2>
        </div> : null}

        {apiStatus === "error" ? <div className="paymentError">
            <h2>{paymentSuccessMessage}</h2>
        </div> : null} */}
      {apiStatus === "loading" || isScriptLoaded === false ?
        <div className="loader">
          <div className="nb-spinner"></div>
        </div> : null
      } </>} </div>);
});