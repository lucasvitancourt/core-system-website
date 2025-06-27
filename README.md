# Core System - Frontend

Frontend do sistema de agendamentos Core System, desenvolvido em React com Vite.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Framework CSS
- **Material Symbols** - Ícones

## 📦 Instalação

1. **Instale as dependências:**
```bash
npm install
```

2. **Configure a API:**
   - Certifique-se de que a API PHP está rodando em `http://localhost/New/api/`
   - Ou altere a URL base no arquivo `src/components/MetricsCards.jsx`

3. **Execute o projeto:**
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Cabeçalho da aplicação
│   ├── Hero.jsx        # Seção principal
│   ├── About.jsx       # Seção sobre
│   ├── Modules.jsx     # Módulos do sistema
│   ├── Screenshots.jsx # Screenshots
│   ├── MetricsCards.jsx # Métricas da API
│   └── Footer.jsx      # Rodapé
├── App.jsx             # Componente principal
├── main.jsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## 🔧 Configuração da API

O frontend se conecta com a API PHP através do componente `MetricsCards.jsx`. 

**URL da API:** `http://localhost/New/api/metrics.php`

**Parâmetros disponíveis:**
- `tipo`: `resumido`, `detalhado`, `completo`
- `periodo`: `dia`, `semana`, `mes`, `ano`
- `id_empresa`: ID específico da empresa (opcional)

## 🎨 Personalização

### Cores
As cores podem ser alteradas no arquivo `src/index.css` através das variáveis CSS:

```css
:root {
  --cor-primaria: #6366f1;
  --cor-secundaria: #161a2d;
  --cor-clara: #fff;
  --cor-cinza: #f0f4ff;
  /* ... */
}
```

### Componentes
Cada componente pode ser personalizado editando os arquivos `.jsx` correspondentes.

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🚀 Deploy

Para fazer deploy em produção:

1. **Gere o build:**
```bash
npm run build
```

2. **Os arquivos estarão em `dist/`**

3. **Faça upload para seu servidor web**

## 🔍 Troubleshooting

### Erro de CORS
Se houver erro de CORS, verifique se a API PHP tem os headers corretos:
```php
header('Access-Control-Allow-Origin: *');
```

### API não responde
- Verifique se o servidor Apache/PHP está rodando
- Confirme se a URL da API está correta
- Teste a API diretamente no navegador

### Dependências não instalam
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 Licença

Este projeto faz parte do Core System.
