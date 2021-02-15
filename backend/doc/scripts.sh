npm init --yes

npm install typescript ts-node-dev express @types/express
npm install winston @types/winston morgan @types/morgan
npm install dotenv @types/dotenv
npm install moment @types/moment helmet @types/helmet
npm install compression @types/compression
npm install cors @types/cors
npm install axios @types/axios
npm install node-mailjet
npm install supertest @types/supertest
npm install express-async-errors
npm install jest

tsc --init

mkdir -p ./src/components/resaurant
mkdir -p ./src/components/resaurant/models
mkdir -p ./src/components/resaurant/routes
mkdir -p ./src/components/resaurant/services
mkdir -p ./src/components/resaurant/test

mkdir -p ./src/common
mkdir -p ./src/common/loaders
