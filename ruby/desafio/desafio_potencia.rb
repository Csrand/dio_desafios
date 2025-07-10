numeros_usuario = []

puts "Por favor, insira 3 números."

3.times do |i|
  print "Digite o #{i + 1}º número: "
  numero = gets.chomp.to_i
  numeros_usuario << numero
end

puts "\nO array com os números que você inseriu é: #{numeros_usuario}"

numeros_elevados = numeros_usuario.map { |n| n ** 3 }

puts "Os números elevados à 3ª potência são: #{numeros_elevados}"