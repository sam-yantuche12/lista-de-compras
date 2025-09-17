import { header } from "./componentes/header/header.js";
import { alimentosBasicos } from "./componentes/productos/alimentosBasicos.js";
import { bebidas } from "./componentes/productos/bebidas.js";
import { frutas } from "./componentes/productos/frutas.js";
import { lacteos } from "./componentes/productos/lacteos.js";

function app() {
    let root = document.getElementById("app");
    root.appendChild(header());

    let main = document.createElement("main");

    // Productos
    let productos = document.createElement("section");
    productos.appendChild(alimentosBasicos());
    productos.appendChild(bebidas());
    productos.appendChild(frutas());
    productos.appendChild(lacteos());

    // Carrito
    let carrito = document.createElement("section");
    let tabla = document.createElement("table");

    let thead = document.createElement("thead");
    let trHead = document.createElement("tr");

    let th1 = document.createElement("th");
    th1.textContent = "Producto";
    let th2 = document.createElement("th");
    th2.textContent = "Precio";
    let th3 = document.createElement("th");
    th3.textContent = "Acción"; // 👉 nueva columna

    trHead.appendChild(th1);
    trHead.appendChild(th2);
    trHead.appendChild(th3);
    thead.appendChild(trHead);

    let tbody = document.createElement("tbody");
    tbody.id = "lista-carrito";

    tabla.appendChild(thead);
    tabla.appendChild(tbody);

    let total = document.createElement("p");
    total.textContent = "Q 0";

    carrito.appendChild(tabla);
    carrito.appendChild(total);

    main.appendChild(productos);
    main.appendChild(carrito);
    root.appendChild(main);

    // --- Cargar carrito desde localStorage ---
    let carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    let totalSuma = 0;

    carritoGuardado.forEach(p => {
        let tr = document.createElement("tr");

        let tdNombre = document.createElement("td");
        tdNombre.textContent = p.nombre;

        let tdPrecio = document.createElement("td");
        tdPrecio.textContent = "Q " + p.precio;

        let tdAccion = document.createElement("td");
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            tr.remove();
            let totalActual = parseFloat(total.textContent.replace("Q ", ""));
            total.textContent = "Q " + (totalActual - p.precio);

            // actualizar localStorage
            let index = carritoGuardado.findIndex(item => item.nombre === p.nombre && item.precio === p.precio);
            if (index > -1) {
                carritoGuardado.splice(index, 1);
                localStorage.setItem("carrito", JSON.stringify(carritoGuardado));
            }
        };
        tdAccion.appendChild(btnEliminar);

        tr.appendChild(tdNombre);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdAccion);

        tbody.appendChild(tr);

        totalSuma += p.precio;
    });

    total.textContent = "Q " + totalSuma;

    // --- Detectar clicks en "Agregar" ---
    main.addEventListener("click", function(e) {
        if (e.target.tagName === "BUTTON" && e.target.textContent === "Agregar") {
            let div = e.target.parentElement;
            let nombre = div.children[0].textContent;
            let precio = parseFloat(div.children[1].textContent.replace("Q ", ""));

            let tr = document.createElement("tr");

            let tdNombre = document.createElement("td");
            tdNombre.textContent = nombre;

            let tdPrecio = document.createElement("td");
            tdPrecio.textContent = "Q " + precio;

            let tdAccion = document.createElement("td");
            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "❌";
            btnEliminar.onclick = function () {
                tr.remove();
                let totalActual = parseFloat(total.textContent.replace("Q ", ""));
                total.textContent = "Q " + (totalActual - precio);

                // actualizar localStorage
                let index = carritoGuardado.findIndex(item => item.nombre === nombre && item.precio === precio);
                if (index > -1) {
                    carritoGuardado.splice(index, 1);
                    localStorage.setItem("carrito", JSON.stringify(carritoGuardado));
                }
            };
            tdAccion.appendChild(btnEliminar);

            tr.appendChild(tdNombre);
            tr.appendChild(tdPrecio);
            tr.appendChild(tdAccion);

            tbody.appendChild(tr);

            // Actualizar total
            let totalActual = parseFloat(total.textContent.replace("Q ", ""));
            total.textContent = "Q " + (totalActual + precio);

            // Guardar en localStorage
            carritoGuardado.push({ nombre: nombre, precio: precio });
            localStorage.setItem("carrito", JSON.stringify(carritoGuardado));
        }
    });
}

app();
