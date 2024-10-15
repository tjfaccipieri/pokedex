# Indicando a partir de qual imagem docker eu quero iniciar
FROM ubuntu/nginx:latest

# Informações do projeto (criador / contato / etc) / Opcional
LABEL maintainer="Turma AWS 02"

# Run -> roda o comando digitado nele
RUN apt update && apt upgrade -y

# copiar todos os arquivos da pasta "pokedex" pra dentro da pasta do nginx
COPY ./pokedex/* /var/www/html/

#expor a porta de conexão para acesso externo
EXPOSE 80

# Rodar o executavel do servidor Nginx
CMD ["nginx", "-g", "daemon off;"]

