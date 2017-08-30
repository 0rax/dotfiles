"" Use Vim settings, rather than Vi settings (much better!).
"" This must be first, because it changes other options as a side effect.
set nocompatible

"" Plugins
call plug#begin('~/.vim/plugged')

Plug 'Soares/base16.nvim'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'ctrlpvim/ctrlp.vim'

call plug#end()

"" Standard configuration
" Editor Config
if has('mouse')
    set mouse=a         " enable mouse if possible
endif
if has("vms")
  set nobackup		" do not keep a backup file, use versions instead
else
  set backup		" keep a backup file (restore to previous version)
  set undofile		" keep an undo file (undo changes after closing)
endif
set title               " let vim set the terminal title
set updatetime=100      " redraw the status bar often
set history=50		" keep 50 lines of command line history
set ruler		" show the cursor position all the time
set showcmd		" display incomplete commands
set incsearch		" do incremental searching
set backspace=indent,eol,start " allow backspacing over everything in insert mode
set number              " show number ruler
" Indentation
set autoindent
set smartindent
set cindent
set tabstop=8
set shiftwidth=2

"" Mapping
" deactivate cusroline & cusrorcolumn
nnoremap <Leader>c :set cursorline! cursorcolumn!<CR>
" remove search highlighting
nnoremap <esc> :noh<return><esc>
nnoremap <esc>^[ <esc>^[

" Colors
syntax on               " allow syntax highlighting
set background=dark     " background color
colorscheme OceanicNext " base16 OceanicNext
set termguicolors       " use true colors to render
set hlsearch            " highlight search results
set cursorline          " show current line
set cursorcolumn        " show current column

"" Plugins Configur
" Airline
let g:airline#extensions#tabline#enabled=1
let g:airline#extensions#tabline#buffers_label='buffer'
let g:airline#extensions#tabline#show_splits = 0
let g:airline#extensions#tabline#show_tabs=0
let g:airline_theme='base16_oceanicnext'
let g:airline_powerline_fonts=1

" CtrlP Configuration
let g:ctrlp_map = '<C-p>'
let g:ctrlp_cmd = 'CtrlP'
let g:ctrlp_working_path_mode = 'c'
if executable('ag')
  " Use ag over grep
  set grepprg=ag\ --nogroup\ --nocolor

  " Use ag in CtrlP for listing files. Lightning fast and respects .gitignore
  let g:ctrlp_user_command = 'ag %s -l --nocolor -g ""'
endif
