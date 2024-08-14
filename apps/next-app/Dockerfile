FROM node:22-alpine

WORKDIR /usr/src/app

# copy all
COPY . ./

RUN npm ci --include-workspace-root -w next-app --audit=false --fund=false

ENV NODE_ENV=production

RUN npx nx run-many -t build -p next-app

# run server
EXPOSE 8080
CMD ["npm", "run", "start", "-w", "api-server"]
