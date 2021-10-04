let data_dir = has('nvim') ? stdpath('data') . '/site' : '~/.vim'
let config_dir = has('nvim') ? stdpath('config') : '~/.vim'
if empty(glob(data_dir . '/autoload/plug.vim'))
  silent execute '!curl -fLo '.data_dir.'/autoload/plug.vim --create-dirs  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

call plug#begin(data_dir . '/plugged')

Plug 'preservim/nerdtree'
Plug 'folke/which-key.nvim'
Plug 'neovim/nvim-lspconfig'

call plug#end()

nnoremap <leader>n :NERDTreeFocus<CR>
nnoremap <C-n> :NERDTree<CR>
nnoremap <C-t> :NERDTreeToggle<CR>
nnoremap <C-f> :NERDTreeFind<CR>
" autocmd VimEnter * NERDTree | wincmd p

lua << EOF
  require("which-key").setup {}

  require("lspconfig").gopls.setup {
    cmd = { "gopls" },
    filetypes = { "go", "gomod" }
  }

EOF
