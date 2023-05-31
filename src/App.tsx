import { useEffect, useState, useRef } from "react";
import './App.css';

function App() {
  const iframeRef = useRef(null);
  const [UID, setUID] = useState("");
  const [isScriptLoaded, setIsScriptLoaded] = useState(true);



  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://chase-var.hostedpaymentservice.net/includes/hpfParent.min.js";
    script.async = false;
    script.onload = () => {
      setIsScriptLoaded(true);
      generateCCUID();
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
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


  const generateCCUID = async () => {
    let resultURl = "https://chase-var.hostedpaymentservice.net/api/init"

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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
      .then(response => response.text()).then(async (result) => {
        let response = JSON.parse(result)
        // if (response?.message === "Unauthorized"){
        //     let JWTToken = await tokengeneration(accountNumber, context.parameters?.parameters?.raw?.split(",").filter((i: any) => i.includes("CRMToken"))[0]?.split(":")[1], false);
        //     generateCCUID()
        // }

        setUID(response.uid);



      })
      .catch(error => {

        setUID("ISO6JNPP7TQPAK9BHMDT10SORJUMNH4J");
        (window as any).hpfReady = hpfReady;
        (window as any).completePayment = completePayment;
        (window as any).scrollRelay = scrollRelay;
        (window as any).handlePaymentErrors = handlePaymentErrors;
        (window as any).startPayment = startPayment;
        (window as any).cancelPayment = cancelPayment;
      });
  }

  return (
    <div className="App">
      <div id="secureFrameWrapper">
        {isScriptLoaded ? (
          <iframe
            id="secureFrame"
            className="secureFrame"
            style={{
              border: "1px dashed slategrey",
              backgroundColor: "#f4f4f4",
            }}
            height="270px"
            width="400px"
            ref={iframeRef}
            src={"https://chase-var.hostedpaymentservice.net/hpf/?uid=" + UID}
          ></iframe>
        ) : null}
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
    </div>
  );
}

export default App;
