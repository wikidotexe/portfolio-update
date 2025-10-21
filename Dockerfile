# ---------- STAGE 1: BUILD ----------
FROM node:22-alpine AS builder
WORKDIR /app

# Copy dependencies
COPY package*.json ./
RUN npm install

# Copy source code & env
COPY . .
COPY .env .env

# Build Next.js app
RUN npm run build


# ---------- STAGE 2: RUNNER ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy hasil build dari builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env .env

# Install dependencies for production only
RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
