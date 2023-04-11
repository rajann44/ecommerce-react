import React from "react";
import { Link } from "react-router-dom";

const productDetails = [
  {
    name: "Celestial Vision",
    image:
      "https://lh3.googleusercontent.com/xbnigjKz1YLCk42c1-dJ-uOyJgENlTFHJBxRAUndkn2MglZHXToj2Ih7NCAdiyRtCTW4yRKEFI4f4NPTE-Nh0hfZcF7KSq7JVVB_WFf9gn9VduirV119A0ps7iAISHtUoRf_oJ-5wsI8ThIe6JMUTqyhnZOpH2p0gJPlgiCsav3t7g_0wLpYvNW01pAmnhYOqOAwAqFNah9_qzF3-_iVhJG2wEho2l5E6d4uxMqBYCHO96c_mF9QJ5d5Q8XQYKPIfkAOkednU1Twfz9EsS5OqzhU6n0txsyJdE9X4Gl5RRglVIpU57f3lvd0dPSabpvmGQjdk9NxdcjpLnVTXLrwgqBIyG1GKcDERa0nNOznicV6jVgmglzUKLKxTqTxOzVQOGKMyAFjbn4IeDb96Qoly3lqnZkBqfuxAuW-wJQMkUSekzEwkefJDv7HynU_P4inbvkb5KjMZNkRala9RVLgvQEZNUtoM4w6EL7BoWuXOWpnqy5vTuQoRNRH4ftWc7SRGu9B4mpbDG7OZZ0qEESrsgxcugQdpEJ3ljTTMCF9H_XtijostPJJHY1kSzI2i3BE4v16IN3Y2jYNsL2AcEGtt5BNGb7jrOjFkRIrLSxT49VXnutGbCgf9tdU0W7xyi1-or_CBcsloV_74c9ZRJ6m-H6LDu6tK7bTwu46qB6RpAps-l7Bn6O4jGZykbSuXrT4RknTuVkwrDcMBHVCdHDKLeUw8k3dwtl2rWKUIFtUmCZEhlrZ0ezZDYwFQ_-fNaTgR2XDQaGsmfGqaCjrTk5aKlFSDoaM_nb8f2xXEu-ymzivDb5-vdP-g1dwWvu2tbbumRL-PKMzKd2hLtviY7yujRIGqaXTxAeasyewTzDLygweEYvrpIOjnDkm3JFCH1mkqQ3oY2BTMC0AWtbwC4patCqKn-9vcus4XTdKmOUtoXKFbA2dlBmv8nOzt7Gnh7h8ogiXg5iO006OV8a7CrxY=w909-h682-s-no?authuser=0",
    category: "Abstract",
    price: "$66.00",
  },
  {
    name: "Midnight Mirage",
    image:
      "https://lh3.googleusercontent.com/peCxqVdkS9DR2eFvh0Uj_3XTXmuq1EkgBk_YKmg5_LJ8mogVqIwHeKF4vkHdAQuZozt9c0r_iSX1Pi4QEXbOx4ZBTVW_gnqo5SK00yUzD6cRY-YHYs59nLvrNkInhK_MKQwn0nBpGPPn4ztMU5b2KWTDvW6bncDl1VKzHonW6HRusKNUFQBW0yerPzT_lxZOrYQnNGklSWcUKWQLthYP5j5q4JhONiA4fy6qjOxjQWkp0uT0e6VQBvlNZtf90BhSDnedkJ0tSzE1gF973I377hnytgh12LwET-c0HyavLIfC48YuZ11rIbnUuQ00m1xTJNliedzG-eSk9eI_YD6kYycCuMqDqCPIXPr95R6AY5mXJh9CDYriA_mvVfpZxZWq3p6t0Dk62n2k0vcdF821QtTcxAQ8yKwvyZBwjeN7wz0MhtHGhmccASwjsQaSRGCJUksdNcVbB4SewAAFVS98olhDOYFONAXOZH8zO3wt-2jMrEUf3yYPySCLyGj9gjEYFj0e37lPiV_BNBgZKRckyF5-dwwfTbO1MRYSRvRLAkPKa95I_DBnHrssnOy7ysjRSXY_DizQjbZuNLmg6JWNLzL0lggO1mQg_7KHEG3gVShoouJbPiDNB7o_Ir-HqPFfvi5FPf3iI_bvy-mOIvd2DM-fdrkcpzcV9q2YT8RD07Lpp8H78ZoDcmw8Mi4pdMEVUmiJEcsXjYhXbt-sdct58ktqeLWpCOfGbqhtbsigZPBS5JdF0NYwiZTXFvr35yM0sUgX-Rpl9beOgvg-uHbkZ5r_3I8yc7itvEox8wRXq0VxZCVP8p3MOqgdyG_6BJxaM-gzPRsg0vMiXz_IUmAE_61s-XMEhztnF-3wlI9OdjUNRVKlfsV0NtnyoqRsWfr7REOJBNKBAG6FI7RyBW6TRkOkTOTHBcZbh0SLTnbxWaY0jPcYtQ57vI0HmwShb7JJnvs79BNSqxJuAb7CtjTY=w1040-h682-s-no?authuser=0",
    category: "Digital",
    price: "$86.00",
  },
  {
    name: "Electric Dreamscape",
    image:
      "https://lh3.googleusercontent.com/IuZsQVhjT6STaQcY_KviyZwscMAF3xhf861xYlVyha_H9s9ZZUXF7RWAXpcXy0d5TUnC9j6w5hkzum4uM0LrkImkhIi3Ua6J9-v5xqiGjBn9GxDPKjMEEtpfubdgKMJx759TtWAOCbRGKBZq_0TleH3mKZXBEbdoY_ma3-XWQfC2PGN48j_XnCJfMZFrU5un8s4GeeskuGtpggFLut-XYYsIuEugpR8lhaE-G6hTIKG122rObSJhMPwragfoi75NrgD2lmi80iLamPKxyalvRTMroUXQOQjkebRnvEcrKau-U0KDX6l74KzoGN7Y2SzWMYPdH4MsTQt4GlnyxdT0qxq6CpatGaLhRYezl_LDuwGbH7HC_a5sepdXFd_f_1-bJaO83b1LO_iT5Dou8fOUlVi7R_ShT0GIwxM36AIBYVydMBqQ_kxFEQ0G8mDtp_f9ZzYKgY1WSkl6561c0EQedG57TWr6nzXjTe8tW0ey8RSl9jGlQXitH5azCs2Y6ztOpxp_1LZ6Yx34wCVQ39KfOwYkkHUm8GBYATy8frTojxrBf4hCRO7flhs3VGe4X3a2XcY3HE4sy_o9xH8z_zqXb36mzjXKRGUU0eL-QyTN6fCIsDbXhGBGBsYWJ4JXAy3r3tX0fHh1Fg4zbJkggJs85raiHVvaYqZvGv283YS_abq47XCeDjgiOyw4RLZOdFFk9UkEIn_3bGzWnRLlPVs_XH9cQJw30ZkZRprw5k6aJGuJck2znk1HeCmqrJ71mGLdGjMNz5gOrvMoaDfzNgv4rslfKfSnPrt2tbBJ6ggL8YEUqakIVlT38YQ_cKvjWY2LdxRfUSJwcXQATGjm99Q8-bwEn9wa4YMUlDL3EQt3YiT2ECHe4txibJSCkpIE5wke_2c_kOD-WWRmMB0VOd7fj42YkUHEnUKj0zB75tK-78O3_drb-BkFCfAE8kLugtIyjxPLtDFqQLLxswekr6eF=w1023-h682-s-no?authuser=0",
    category: "Abstract",
    price: "$186.00",
  },
  {
    name: "Ethereal Odyssey",
    image:
      "https://lh3.googleusercontent.com/JVejzbb-Vzh7_VOqXqsIHRIq4SuMMJKVZT7xzLnr6OX5hCcRniZeE1ZcQJFuhv_zvRy2VSXnpte-eQLOCnLN2a7pppa8gohw0s1rwOWXAqs5PElrg-5IZf4TQy2wuak-ljc-wJarUJZ8brTTCnGRL8t8vI98A8p0T_KSDGfXtMuI4zCrORDzBuJok-swkFbna1s9BM22O62kHF1BoSZCqM5lOhvplHq0eLAu75MNczlBf4aqenyUkZnJgJjcl6O9SXvSEE7ORF3naukCvIBYv9Tb33tWyKI_2jBglfZ1o8yUbGgF-_xRw_elhyLDtz2TMSv3VTinJ40N0DuKUAzBxjl7vvYRa1VlrQhk2T6s8b2SKQWqhBVTybqp3nJvXjuhnr3Qmm6VSQI_XvOEuwiBuAVCknnN27ar4j8eMbheuIM3lz829FK2E44uukU3pN9O012vr0LmEqgA3uBNiOcvCutbUYoxMEGYcckLnpzzg0UwMplTENEc7lvGjRI-Z395-hhXVjvjO3t5WurBPbsBIrQekhs3MUHdtsNl9PJQI35ZtUHk2eruwkTVIuDC-X_OX5tw359ufXSG_sdasxQnpqIkx9ICwDI0aa62z2S8ch0PhJR5-nwGraE_GCOL9qEh7m5odQZ2yajZeL8eoZ6ePu3BRldXiLLWE4AG6hRvDUo-zHQu1kPhXAcsQ1nCFO257umI9n5HJ1FquZtzl5s_q01hxahS2zV66uByM4R7waQagNumWH_HLiw_zJiE_aIBuCY0V2tMaYI0RB7J9YA4Q43QXWiozvBta4RNvSQrcnCVWQKZepCUTBaA4mpXEQNmYmI25oahn_BQj68j3jHuRGKOhL305UzKY38AYQW_RRxGt1IrmY491vm2-tqwmdszlqUxGOloXGDycoYAvKsITeJX6IbkMyzGNfeHYuNaTPZFDON8LWwweJ4qHyihHSy6x56mvGvFNmWL5Vughjst=w1212-h682-s-no?authuser=0",
    category: "Neo-Futuristic",
    price: "$161.00",
  },
  {
    name: "Neon Jungle",
    image:
      "https://lh3.googleusercontent.com/5zDT27TkQpxp_LNtfDSYEokuH2VRf9_VOiJopPJuN1Rvdm2tnSX0tIKvDtu3mW5jz3N0oQYB99MTX1eeX2Hm_T4R-4bH1T21w6-h_xRvJ6Vd_c3_BulqfEMMnCF5fDagqQahCapdEdnmAxq_MqTse6oQA3ud4yliIs5rLwAr-6kHgN4uxRBQFuqnbUnDaJ_Y6BBEwv4rbhwm0mTnxxv-EEMQKJ-i4JbywvcL72zhiOiBzeXs_GMi2VADNwNAWECXiPAj3fFF_8j0jdKv_9nE-LnMfO3nh2JXIC8WmcrWp8Iw0wcTKQUOMo57UKS5dxqv7r0r302Fa6L6UqBYt-mLryxQyQGexswirucmVTiVb4uyYQUT9JDLmwol2NevgCAfAi0hO0raIK3Hdsh2zv1N3H7pal0zVEe5cwUTv_lw-nkDpL1LAtD8yNm3pqk4uJlTA3N4ZqU1YDQelWIckEkpGI-9F10naU-8Z1APjiCfVY2Z90jc6unpE2_btdhCFdeV_RjTqsVrhmadupmrANb2Rce5enmG0N1eGZRydiOR1m-g9JLTO7xkWpg-JJtz1iOOWsRa9l7Bs_PnSuwwW7YzwHKuL9sWH1YAIPlet9cphpaUmNqVLGLz3KmrdZInTljqs5L_D-rKI3GfZTmz_cgJV17LXfTFn_N3JkReX04kK20oQazlB5ijerq4f7FwUvsaEhVlxJphNBnW-OWWENZ_5P4joseomKneMF8HuZqcG5I2N5zmO0FTx6C5SvQgsYjHIbM4N6hPMviZ8rqB4tGSRkz3hHW4pWDs7S_tzRBoVIUYdMozDiXHM-zGJZNzvoN-IZFOo_pJbYGqLZtMgGalYQ90UEeLmT0rKvVXgfl1FUApubxIodI8I7FRbblACZXDgd9K86y9aURS0f9So48bzZmEu0GswXjQsZGlFquKLDDENhLjJWsa8SFgON_pjZ8jY-vi4txQA9G9nZO4SWd_=w1021-h682-s-no?authuser=0",
    category: "Abstract",
    price: "$15.00",
  },
  {
    name: "Cosmic Cascade",
    image:
      "https://lh3.googleusercontent.com/YIX6PU-EGlF_Kh7bRrT91R-x1RXH6CSZYKNZy8tU4w6zuI8GAr59opibO_hClgGqzqkSrUzV_3ed5lTQ4Vc3oR7catZ1pEn8pnBaKg8OHMjz-ZDF3aGyLfyqJ3P_HLYZotIp3paKZbEcVD9_RWhD6qJm_-JY7N7HaB5c3OgYhyu-ty0VVyXLHsQzgpeGdfp-a_p977puXOQTy4_TbyNtRBavUI-VQEzvq7QoL9xAVMsyUPPvnd4qHZfcft1gNaQPE_GymPT_lOVm-4FqUViyyU63kMlqzKK-WYdDwe1vRw3Jt2Yo-NhHchK8XmRIoLZGzpRazSk3pkstlr87bGsqSIASkd17o7154RBpmzFYJbSButmDKnTIECYwLKg_oca1ixp55dXBjO6QBe8SP4_4TU43m9GMBDQrxcHwfh3WcUTdnl_w4XbyFRtqfdNQfdY5wcnGgCUUZGpa6pWmGtY6CVRUtrPHnIDZInAaa_AfDP45CdeKLKpFBnAUUSuGmq1a2T1KU_2kRK2jzoKrNzzZvihHehEzvkZ1qKXuuZqRdYlWq2EDy1Ixu1Dtiq0KMHlK1yXhGQKSnWRPebyX7Q2hXl4he6EEuAZsXmn0j8z4CY0QwC5pbGOHg3ki2tiPX74cRtY0fss17RwWvaT1Q_HGGjyp0AmIdhZ_FXRBhBAksB_qi_C4Cd3mlsHYKJnjCZDww1UlAxmqMN-3QakzdHc6zWLqCIORufojXdZnr-2FDSgYOR3cDWroKg97jdD7ZE4io55jjw_ehBRBxgTQVGbj9YFQFvi5s2w6vaDiTTPs4cKdSGKZKCUbV1MXjTFhqERgf1_RvX2FiV-gGGgO-FOi6jnMzaaii5CwH1oCyGOe6vL3bqAtWmD-l-xAvitmqf1V1Mt8JElfIVb4U5vA6KVzEgXzzqeF3z7KmxXe8oe4H29CA72MqW-oBY1jSl6U6X6t1K27gpSkvF4fiV4VywPk=w1212-h682-s-no?authuser=0",
    category: "Digital",
    price: "$76.00",
  },
  {
    name: "Radiant Reverie",
    image:
      "https://lh3.googleusercontent.com/kSbrPCrLEJ7dProla7XB6Yhp24qQtglnBVlWkmX-JIEWouI03g4FWExTWCc3x0lJl_w4KRUZRW_fRr3P3BzWYnYVkq4jEo23qqi2j4e8FamYaTpBDGZS-C-1orBKV9b-vBDBLe7FReLF6JCC5OH9jSHyDXei5mHwt4-Wbuc6gLeNvl7PAJhw356iT5t_Aqipf7gbA5opHenxy2Aa5GYkbm_pB05e7d9JNeVqu_Cyoh28LWVkbrFzNqQiDm5UEbZOzrEkT8-76hk5gwbl_fMisZzWxkLQTPdk6dJwjpycbGsaZ6euukbsRvA9Vob611fEO_9ap3Qt1EtupDOe2ayuYOYLI1R1jyHCrkKBk7cEHphh3Hj67__iSVPH6weQG8dT3jVBql2jfeJYbFlMz_PZ9tjkxtK5JXuZJ7bnvLA9NKJ7rVFqlbBX4D5dLgptcK_xYL8BkTEgRBwgRigUxGeFbt0c29AGY9DqNGLdgqB7nzE7-DTwqJbEJsrU__li5xUq6N05fUucDdcKNO3Q15fp88Dp-a_FijeA5IOW_Vo_kRi36HK9QN5GjHqJLz0G8TcwqB_UzqsCoaw1HErWQ60QcvdpZ0RUzQS_xf-0c8RV6uyehCX-Rl_TsVQkkpceSUOd4z7EXMH30qSlyaxz-UuZqkIHa7Qy0vRAnyO6LXOyKda7JB4V2TIv83Q0tNpNifXl0T1EnZW_97VmFVz9mwStrwWbzhOmYY7Nnn0OwR3FI71nxTcvwLnYvLOrUofhNXBGwpRWGCghULbmt06LsevDEzgnd3ZOep43DdRzVojemLqgak_R564e1xTv0agit9L-kAESby-aAoKylmMfUgripzFoJZmMumFn3MzvxJP2b1dylrRUfn5tkn4h4p4SqqfSgA9eDszFu6-XQMo14Yij0JBaKEUFU8nEUSdPTo8OSAvWHhPKoQC8neV13XY7KhndAn4JOAQ2Bmwpo56fBqXU=w1212-h682-s-no?authuser=0",
    category: "Neo-Futuristic",
    price: "$45.00",
  },
  {
    name: "Solar Symphony",
    image:
      "https://lh3.googleusercontent.com/3_faHyLWj98oflruVTZj_Sfm31edxDZkAMjeyXE0eE0rRnsUX9zjJT3sDc83xfZPQI3qjbCEReveXJRz1BY3f7nrZgqopdCzdBhWi0tMh6qtx0Ru0JbiC9zMTqThh0dWXUAp06wuIph1GrC4aLzQjzKxwnMaurQ4bqzNh5DWbwciPMN0tz2JNhzRNHg3AbApUJGytpquJIZtWA05w4KdMtKccdiIjf-yKrPncnQHeqo-uvsmzgkgq2Rug-J57R1VEGuHRMSfh8keprIyxbp2t3AJTWmG4qG4DQD0Zl4BzSILC47oBeTJbRLfpEBtA8V-tIIz2cRn37U1Oc2815blejZ27SLzFyfcBcio4KfC85dhwJ-y05WsXQjVJnNnYSalpc1s4IDCHdQSoZURO4ihHdd6SsaHbJfmK7ZqQ0YSGjnbhi_RAvg21eVAte1OzEsAzdbMxhPIQilvJLHtKR8TXY6Bj74kqdDIRH1sN8WvSD4TA96JxycbXtf9HrtDrAZbQe4GwdpnSOpEjNTZWYPPEhaloe1K9kKJ8YmMMxA_wbCcQWUltf7O5JtEGjJUTqdf-bEejMf1VOk25deLzj6ohsP6Fwq4cJFpU9_VGoav-0nsKWOR2JhD7-sXk7r4jsZbT1uqT9ObDn1ps86NOLQB6ztjnXY5WQs_9ZoIeLGfgS3yQMrxKtkhzgPmESB5QpZ1IfF94U6DwNu1uXNirL1DooJqVwtB797Nugu_vZrqk0EUkPNm20IKDw2j0oTasaSZvqHW8ow9xgz2QwHGWWf6-v_J8dTHujnpcJZ68JtIRcTL_5t4pzC5fxcJGdqI1Htuqm1Cjoq57lN25XocX2oowefmjRSww5z5M1qWxwPObdPysgG8E5Ptnwf2oVQZ1BIwLr8J1GJDbvTWgtZAa6r0-W_IJHxrgdI1W9IwvwKsnak8E7Pph3sSQv39YQKFXAXihNYT8W4BX5jCuj7z_1iB=w909-h682-s-no?authuser=0",
    category: "Digital",
    price: "$39.00",
  },
];

const Products = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {productDetails.map((product, index) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
              <a className="block relative h-48 rounded overflow-hidden">
                <Link to="/product" state={product}>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.image}
                  />
                </Link>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY: {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <p className="mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
