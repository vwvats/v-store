import { Html, Head, Main, NextScript } from 'next/document'
//import { snipcartSettings, snipcartScript } from './snipcart'
import { snipcartAPIKey } from './snipcart'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script async src="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js"></script>
        <div 
          hidden id="snipcart" 
          data-api-key={snipcartAPIKey} 
          data-config-modal-style="side">
        </div>
        {/* <script>
          { typeof window !== "undefined" ? window.SnipcartSettings = snipcartSettings : null }
          { typeof window !== "undefined" ? snipcartScript() : null }
        </script> */}
      </body>
    </Html>
  )
}