loop do
  puts '********** Bem vindo a calculadora **************'

  puts "Opções:\n1-Somar\n2-Subrtrair\n3-Multiplicar\n4-Dividir\n0-Sair\n"
  print 'Insira uma opção: '
  opcao = gets.chomp

  if opcao == '0'
    puts 'Obrigado e volte sempre'
    break
  end

  puts 'Digite os dois numeros que voce deseja fazer a conta'
  entradas = gets.chomp.split
  n1 = entradas[0].to_f
  n2 = entradas[1].to_f

  case opcao
  when '1'
    resultado = n1 + n2
    puts "O resultado da soma é: #{resultado}"
  when '2'
    resultado = n1 - n2
    puts "O resultado da subtração é: #{resultado}"
  when '3'
    resultado = n1 * n2
    puts "O resultado da multiplicação é: #{resultado}"
  when '4'
    resultado = n1 / n2
    puts "O resultado da divisão é: #{resultado}"
  else
    puts 'Numero invalido Digite outra opção'
  end
  puts "\n"
end
