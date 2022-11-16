import React from "react";
import Imagem1 from "../imagem/avatar.png"

export default function Jogo() {
    return (

    <div className="row ">
        <div className="row justify-content-center row-cols row-cols-md-2 g-4">
            <div className="" id="col-1">
                <div className="card h-100">
                    <script id="img1" src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player onclick="responsiveVoice.speak('casa')" src="https://assets1.lottiefiles.com/private_files/lf30_qjqkjaj0.json"
                        background="transparent"
                        speed="1"
                        style={{ width: "200px; height: 200px ; padding: 0px; margin: 0px;" }}
                        loop
                        autoplay></lottie-player>

                    <table>
                        <tr>

                            <td><button className="silaba" onclick="responsiveVoice.speak('ca')" value="ca">CA</button></td>
                            <td><button className="silaba" onclick="responsiveVoice.speak('si')" value="si">SI</button></td>
                            <td><button className="silaba" onclick="responsiveVoice.speak('co')" value="co">CO</button></td>
                        </tr>
                        <tr>
                            <td><button className="silaba" onclick="responsiveVoice.speak('ce')" value="ce">CE</button></td>
                            <td><button className="silaba" onclick="responsiveVoice.speak('sô')" value="so">SO</button></td>
                            <td><button className="silaba" onclick="responsiveVoice.speak('sá')" value="sa">SA</button></td>
                        </tr>
                        <tr>
                            <td><button className="silaba" onclick="responsiveVoice.speak('sí')" value="ci">CI</button></td>
                            <td><button className="silaba" onclick="responsiveVoice.speak('sé')" value="se">SE</button></td>
                            <td><button className="silaba" onclick="responsiveVoice.speak('su')" value="su">SU</button></td>
                        </tr>
                        <td><button className="silaba" onclick="responsiveVoice.speak('letra c')" value="c"> C </button></td>
                        <td><button className="silaba" onclick="responsiveVoice.speak('cu')" value="cu">CU</button></td>
                        <td><button className="silaba" onclick="responsiveVoice.speak('letra s')" value="s"> S </button></td>
                    </table>
                </div>
            </div>
         
		<div id="enviar1">
			<button class="button"><span> </span></button>
		</div>
            
            <div className="col">
                <div className="card h-100">
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_ct9lwdsp.json"
                        background="transparent"
                        speed="1"
                        style={{ width: "300px; height: 300px" }}
                        loop
                        autoplay
                    ></lottie-player>

                    <form action="">
                        <div className="card-body">
                            <table
                                id="silabas"
                                onChange="atualizouSelect()"
                                className="custom-select"
                                multiple>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    )
};