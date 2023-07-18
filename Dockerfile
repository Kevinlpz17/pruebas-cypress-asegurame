FROM cypress/browsers:node16.17.0-chrome106

# VOLUME [ "/var/www/html/cypress/reports", "/var/www/html/cypress/screenshots" ]

ENV TZ="America/Tegucigalpa"

WORKDIR /var/www/html

COPY . .
 
RUN npm ci

