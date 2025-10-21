#!/bin/bash
SERVER_USER="root"
SERVER_HOST="192.168.100.13"
# cesta ke slozce frontend projektu na serveru
SERVER_PATH="/var/Docker/Portfolio/frontend-apache"
# konkretni nazev bezicniho kontejneru
CONTAINER_NAME="my_portfolio_apache"
# univerzalni image pro vsechny react frontend projekty
IMAGE_NAME="image_portfolio_apache"

echo "🚀 Začínám deployment..."

if [ ! -d "build" ]; then
    echo "❌ Build složka neexistuje. Spusťte nejdříve 'npm run build'"
    exit 1
fi

echo "📦 Nahrávám build soubory na server..."

# Nahrát pouze build složku a .htaccess
rsync -avz --delete ./build/ $SERVER_USER@$SERVER_HOST:$SERVER_PATH/build/

if [ -f ".htaccess" ]; then
    scp ./.htaccess $SERVER_USER@$SERVER_HOST:$SERVER_PATH/
fi

echo "🐳 Restartování kontejneru..."

ssh $SERVER_USER@$SERVER_HOST "
    cd $SERVER_PATH &&
    # Zastavit a odstranit starý kontejner
    docker stop $CONTAINER_NAME 2>/dev/null || true &&
    docker rm $CONTAINER_NAME 2>/dev/null || true &&
    
    # DŮLEŽITÉ: Rebuild image s novými soubory
    docker build -t $IMAGE_NAME . &&
    
    # Spustit nový kontejner
    docker run -d -p 2001:80 --name $CONTAINER_NAME $IMAGE_NAME
"