# VoiceStory - Voice Recording Platform

A modern Next.js 13+ application for recording and sharing voice stories with token rewards.

## Features

- 🎙️ **Voice Recording**: High-quality audio recording with real-time feedback
- 📝 **Transcript Generation**: AI-powered transcription with editing capabilities
- 🪙 **Token Rewards**: Earn CHT tokens for story contributions
- 📊 **Dashboard**: Track contributions, earnings, and community stats
- 📱 **Mobile-First**: Responsive design for all devices
- ⚡ **Modern Stack**: Next.js 13+ App Router, TailwindCSS, shadcn/ui

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: TailwindCSS
- **Components**: shadcn/ui + Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── globals.css          # Global styles and CSS variables
├── layout.tsx          # Root layout component
├── page.tsx            # Landing page
├── consent/            # Consent and privacy page
├── recording/          # Audio recording interface
├── processing/         # Processing status page
├── transcript/         # Transcript review and editing
├── token-confirmation/ # Success and token reward page
└── dashboard/          # User dashboard and stats

components/ui/          # Reusable UI components
├── button.tsx
├── card.tsx
├── checkbox.tsx
├── textarea.tsx
├── progress.tsx
├── table.tsx
└── badge.tsx

lib/
└── utils.ts           # Utility functions
```

## Pages Overview

### Landing Page (`/`)

- Hero section with call-to-action buttons
- Feature highlights and community stats
- Navigation to recording and dashboard

### Consent Page (`/consent`)

- Privacy policy and data usage information
- Consent checkbox and agreement
- Gateway to recording interface

### Recording Page (`/recording`)

- Live audio recording with visual feedback
- File upload alternative
- Audio playback and re-recording options

### Processing Page (`/processing`)

- Real-time processing status
- Multi-stage progress indicator
- Automatic redirection upon completion

### Transcript Page (`/transcript`)

- Audio playback controls
- Editable transcript with save functionality
- Final submission interface

### Token Confirmation (`/token-confirmation`)

- Success confirmation
- Token reward display
- Achievement notifications

### Dashboard (`/dashboard`)

- User statistics and token balance
- Contribution history table
- Recent activity feed

## Customization

### Color Scheme

The app uses an amber-based color palette. To modify:

- Update CSS variables in `app/globals.css`
- Adjust TailwindCSS theme in `tailwind.config.js`

### Components

All UI components are built with shadcn/ui and can be customized:

- Modify existing components in `components/ui/`
- Add new components following the established patterns

### Animations

Framer Motion animations can be adjusted in each page component:

- Modify `initial`, `animate`, and `transition` props
- Add new animation variants as needed

## API Integration Points

The application is designed with placeholder data and is ready for API integration:

1. **Authentication**: Add user authentication flow
2. **Audio Upload**: Integrate with audio storage service
3. **Transcription**: Connect to speech-to-text API
4. **Token System**: Implement blockchain/token logic
5. **Data Storage**: Connect to database for user data

## Production Deployment

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Start production server**

   ```bash
   npm start
   ```

3. **Environment Variables**
   Set up required environment variables for:
   - API endpoints
   - Authentication keys
   - Storage configurations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
"
