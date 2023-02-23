## Környezeti változók
### Backend
- JWT_TOKEN=(bármilyen string)

# Telepítés
1. Telepíts a gépre XAMPP-ot és Node.js-t
2. A Control Panelen indítsd el az Apache-ot és a MySQL-t, majd az utóbbi mellett nyomj az Admin gombra
3. Csinálj egy gepjarmuvek adatbázist és importáld be a táblákat
4. Töltsd le a repot
5. Nyisd meg .code-workspace kiterjesztésű fájlt VS Code-al

## Backend
1. CTRL+SHIFT+ö gombkombinációval nyiss a terminált a backend mappának
2. Gépeld be a következő parancsokat:
- npm i
- npm start

## Frontend

1. CTRL+SHIFT+ö gombkombinációval nyiss a terminált a frontend mappának
2. Gépeld be a következő parancsokat:
- npm i
- npm run dev
3. Nyomj o gombot, vagy CTRL+linkre kattints

### Helyi hálón
...fentiek
1. A frontend package.json fájljában keresd meg a "scripts" elemet, azon belül a "dev" értékét ("vite") egészítsd ki: " --host"
###### Ezzel az adott sornak így kell kinéznie:
> "dev": "vite --host",
2. Indítsd el és most már a terminálban kiírja milyen ip címmel és porttal érhető el
##### Így már tesztelhető a többi helyi hálózaton lévő készülékről is.
