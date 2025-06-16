#!/bin/bash

# Caminho do diretório atual
DIR=$(pwd)

# Nome do arquivo de saída
ARQUIVO="estrutura.txt"

# Limpa o arquivo antes de escrever
> "$ARQUIVO"

# Função recursiva para listar estrutura ignorando pastas padrão
listar_estrutura() {
  local caminho="$1"
  local prefixo="$2"

  for item in "$caminho"/*; do
    nome=$(basename "$item")

    # Ignorar pastas específicas
    if [[ "$nome" == "node_modules" || "$nome" == ".git" || "$nome" == ".next" || "$nome" == "dist" || "$nome" == "build" ]]; then
      continue
    fi

    # Adiciona ao arquivo
    echo "${prefixo}${nome}" >> "$ARQUIVO"

    # Se for diretório, entra nele recursivamente
    if [ -d "$item" ]; then
      listar_estrutura "$item" "$prefixo  "
    fi
  done
}

# Inicia a listagem
listar_estrutura "$DIR" ""

echo "Estrutura salva em $ARQUIVO"
