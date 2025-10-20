FROM node:22-alpine AS builder
WORKDIR /app

# Copy package dan install dependencies
COPY package*.json ./
RUN npm install

# Copy semua file ke container
COPY . .

# Build Next.js app
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy hasil build dari stage sebelumnya
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install hanya dependencies untuk production
RUN npm install --omit=dev

# Port default Next.js
EXPOSE 3000

# Jalankan Next.js
CMD ["npm", "start"]
