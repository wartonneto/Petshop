import "./database";

import Dono from "./app/models/dono";
import Pet from "./app/models/pet";
import Funcionario from "./app/models/funcionario";
import Consulta from "./app/models/consulta";

class Playground {
    static async play() {
        const data = await Dono.findAll({
            include: [
                {
                    model: Pet,
                },
            ],
            where: {
                id: 1,
            },
            limit: 1000,
        });

        console.log(data)
    }
}

Playground.play();