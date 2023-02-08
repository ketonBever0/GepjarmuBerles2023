# Readme
## Frontend
1. Töltsd le a repot
2. Nyisd meg .code-workspace kiterjesztésű fájlt VS Code-al
3. CTRL+SHIFT+ö gombkombinációval nyiss a terminált a frontend mappának
4. Gépeld be a következő parancsokat:
- npm i
- npm run dev
5. Nyomj o gombot, vagy CTRL+linkre kattints

### Helyi hálón
...fentiek
1. A package.json fájlban keresd meg a "scripts" elemet, azon belül a "dev" értékét ("vite") egészítsd ki: " --host"
###### Ezzel az adott sornak így kell kinéznie:
> "dev": "vite --host",
2. Indítsd el és most már a terminálban kiírja milyen ip címmel és porttal érhető el
##### Így már tesztelhető más készülékekről is.
