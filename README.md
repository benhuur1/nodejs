# Projeto Node.js

Estudos de Node.js (Origamid).

## 📌 Manual rápido — fluxo de trabalho com Git

Esse é o ciclo que repito a cada aula/tarefa.

### 1. Criar uma branch nova (sempre a partir da `main` atualizada)
```bash
git checkout main          # vai para a main
git pull                   # atualiza com o que está no GitHub
git checkout -b nome-da-branch   # cria e entra na branch nova
```
> Exemplo de nome: `0205-custom-req-e-res-1`

### 2. Trabalhar e salvar as alterações (commit)
```bash
git status                 # ver o que mudou
git add .                  # adiciona TODOS os arquivos modificados
git commit -m "mensagem descrevendo o que foi feito"
```
> Para adicionar só alguns arquivos: `git add arquivo1.mjs arquivo2.mjs`

### 3. Enviar a branch para o GitHub (push)
```bash
git push -u origin nome-da-branch   # primeira vez (liga local ao remoto)
git push                            # próximas vezes
```

### 4. Abrir um Pull Request (PR) apontando para a `main`
```bash
gh pr create --base main --title "Título da PR" --body "Descrição"
# ou abrir no navegador:
gh pr create --base main --web
```
> Requer o GitHub CLI (`gh`) instalado e autenticado (`gh auth login`).
> Também dá pra abrir a PR direto pelo site do GitHub.

### 5. Depois do merge — sincronizar e limpar
```bash
git checkout main
git pull
git branch -d nome-da-branch   # apaga a branch já mergeada (opcional)
```

## 🧰 Comandos úteis
| Comando | O que faz |
|---|---|
| `git status` | mostra arquivos modificados |
| `git branch --show-current` | mostra a branch atual |
| `git log --oneline -5` | últimos 5 commits resumidos |
| `git switch -c nome` | cria branch (alternativa ao `checkout -b`) |
| `gh pr list --state all` | lista as PRs do repositório |
