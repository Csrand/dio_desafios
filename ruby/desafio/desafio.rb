print 'Digite seu nome, sobrenome e sua idade: '
entradas = gets.chomp.split
nome = entradas[0]
sobrenome = entradas[1]
idade = entradas[2].to_i
puts "Ola #{nome} #{sobrenome} vejo que sua idade é: #{idade}"
