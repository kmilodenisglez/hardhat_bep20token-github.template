Para conectar MetaMask a tu red local de Hardhat (`http://127.0.0.1:8545`), sigue estos pasos:

---

### **1. Inicia la red local de Hardhat**
Ejecuta este comando en tu proyecto para iniciar el nodo de Hardhat:
```bash
npx hardhat node
```
Esto iniciará una red local con 20 cuentas de prueba y fondos ilimitados.

---

### **2. Configura MetaMask para conectarse a Hardhat**

#### **a. Agrega la red personalizada**
1. Abre MetaMask y haz clic en el menú de redes (arriba a la derecha).
2. Selecciona **"Agregar red"** → **"Agregar una red manualmente"**.
3. Completa los campos:
    - **Nombre de la red**: `Hardhat Local` (o cualquier nombre).
    - **Nueva URL de RPC**: `http://127.0.0.1:8545`.
    - **ID de cadena (ChainID)**: `31337` (Hardhat usa este ID por defecto).
    - **Símbolo de moneda**: `GO-ETH`.
    - **URL del explorador de bloques**: Déjalo en blanco.

---

#### **b. Importa una cuenta de prueba**
1. En la terminal donde ejecutaste `npx hardhat node`, verás **claves privadas** de cuentas de prueba:
   ```
   Cuentas
   =======
   Cuenta #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
   Clave privada: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
   ```
2. En MetaMask, haz clic en **"Importar cuenta"**.
3. Pega la clave privada de una cuenta de prueba (ej: `0xac0974...f2ff80`).

---

### **3. Verifica la conexión**
- **Balance**: Deberías ver 10,000 ETH en la cuenta importada.
- **Enviar transacciones**: Usa scripts de Hardhat o interactúa desde tu dapp local.

---

### **Troubleshooting**

#### **Si MetaMask no se conecta:**
1. **Confirma que el nodo de Hardhat está ejecutándose** (la terminal debe mostrar "Started HTTP and WebSocket JSON-RPC server").
2. **Desactiva redes de prueba predeterminadas**:
    - En MetaMask, ve a **Configuración → Redes → Redes de prueba** y desactiva "Mostrar redes de prueba".
3. **Usa el ChainID correcto**: Hardhat usa `31337`, **no** `1337` (este último es para Ganache).

#### **Si aparece un error de seguridad:**
- Ignora las advertencias sobre HTTP (es seguro para localhost).

---

### **Ejemplo de interacción desde tu dapp**
En tu código frontend, configura el proveedor para usar la red local:
```javascript
// En JavaScript/ethers.js
const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send("eth_requestAccounts", []);
```

---

### **Notas adicionales**
- **Reset de cuenta en MetaMask**: Si hay inconsistencias, ve a **Configuración → Seguridad y privacidad → Restablecer cuenta**.
- **Hardhat vs Ganache**: Hardhat es más rápido y compatible con Solidity ^0.8.0.

¡Ahora puedes probar contratos locales en MetaMask! 🚀