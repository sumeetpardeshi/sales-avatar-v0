# Sales Avatar

A React-based application that creates an interactive AI sales avatar using Tavus API integration. The application allows users to spawn AI avatars that can engage with customers using context from any provided URL.

## Features

- **URL-based Context Loading**: Load sales context from any webpage URL
- **AI Avatar Generation**: Create interactive AI avatars using Tavus API
- **Real-time Video Interaction**: WebGL-powered video streaming with chroma key effects
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Component-based Architecture**: Modular design with reusable components

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- WebGL for video processing
- @daily-co/daily-react for video calls
- Tavus API for AI avatar generation

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Tavus API key

## Setup

1. Clone the repository:
```bash
git clone https://github.com/sumeetpardeshi/sales-avatar-v0.git
cd sales-avatar-v0
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Tavus API key:
```
VITE_TAVUS_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── api/                    # API integration functions
├── components/            
│   ├── Call/              # Video call component
│   ├── CallControls/      # Call control buttons
│   └── VideoPlayer/       # WebGL video player
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## Components

- **VideoPlayer**: Handles video rendering with WebGL effects
- **Call**: Manages video call interface and state
- **CallControls**: Controls for starting and ending calls

## Usage

1. Enter a URL containing the sales context in the input field
2. Click "Spawn Avatar" to create an AI sales representative
3. Interact with the avatar in real-time
4. Use the controls to end the call when finished

## Environment Variables

- `VITE_TAVUS_API_KEY`: Your Tavus API authentication key

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License

## Acknowledgments

- Tavus API for AI avatar technology
- Daily.co for video call infrastructure
