Para generar una **API Key de BscScan** y configurar tu proyecto Hardhat correctamente, sigue estos pasos:

---

### **1. Crear una API Key en BscScan**
1. **Regístrate/Inicia sesión** en [BscScan](https://bscscan.com/).
2. Ve a **"API-Keys"** en el menú superior.
3. Haz clic en **"Add"** y ponle un nombre (ej: `Hardhat`).
4. **Copia tu API Key** (aparecerá en la lista).

![BscScan API Key](https://i.imgur.com/6XZtQjJ.png)

---

### **2. Configurar `hardhat.config.js` para BSC**
Actualiza tu archivo de configuración y agrega el api-key:


---

### **3. Verificar el contrato**
Ejecuta el comando con la red `testnet` y tu dirección de contrato:
```bash
npx hardhat verify --network testnet 0xBAE9DF262f1d1D111b528EfCd7fB745Ffef90140
```

Si el contrato tiene **argumentos en el constructor**, añádelos al final:
```bash
npx hardhat verify --network testnet 0xBAE9DF262f1d1D111b528EfCd7fB745Ffef90140 "arg1" "arg2"
```

---

### **Errores comunes y soluciones**
1. **`Failed to send contract verification request`**:
    - Revisa que la red en `--network` coincida con la del contrato (testnet/mainnet).
    - Asegúrate de que el contrato esté desplegado en BSC (no en otra red).

2. **`Already Verified`**:
    - El contrato ya está verificado en BscScan. No es necesario repetir.

3. **`Invalid API Key`**:
    - Copia la API Key directamente desde BscScan sin espacios.

---

### **Enlaces útiles**
- [Documentación de Hardhat para BSC](https://hardhat.org/plugins/nomicfoundation-hardhat-verify.html)
- [Lista de RPCs de BSC](https://docs.bnbchain.org/docs/rpc)