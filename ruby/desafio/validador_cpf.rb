require 'cpf_cnpj'

puts "Digite o número do CPF para validação:"

cpf_digitado = gets.chomp

if CPF.valid?(cpf_digitado)
  puts "O CPF digitado é válido!"
else
  puts "O CPF digitado é inválido."
end