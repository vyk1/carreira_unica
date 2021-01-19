using System;
namespace ProgramacaoOrientadoObjetos.Classes_e_Ojetos {
    public class Metodos {
        public void Execucao() {
            /* Depósito */
            //Console.WriteLine();
            //Console.WriteLine("Digite seu nome: " + "\n");
            //var nome = Console.ReadLine();
            //Console.WriteLine("Informe um valor para depósito: " + "\n");

            /* Saque */
            //Console.WriteLine();
            //Console.WriteLine("Digite seu nome: " + "\n");
            //var nome = Console.ReadLine();
            //Console.WriteLine("Informe um valor para saque: " + "\n");

            //var valor = Console.ReadLine();

            //var valorConvert = Convert.ToDouble(valor);

            //var conta = new ContaCorrente() {
            //    Agencia = 123,
            //    Titular = "Jéssica",
            //    Numero = 8792,
            //    Saldo = 1000
            //};

            //var deposito = conta.Depositar(valorConvert);
            //var saque = conta.Sacar(valorConvert);

            // Imprime as informações da conta do cliente(DEPÓSITO)

            //Console.WriteLine("------------------------------------");
            //Console.WriteLine();
            //Console.WriteLine("Dados da conta do cliente");
            //Console.WriteLine();
            //Console.WriteLine($"Olá {nome}," + "\n" + "seu depósito foi realizado com sucesso!" + "\n" + $"Valor depositado: {valor}" + "\n");
            //Console.WriteLine($"Agencia: {conta.Agencia}" + "\n" + $"Numero: {conta.Numero}" + "\n" + $"Saldo: {deposito}");
            //Console.ReadKey();
            //Console.WriteLine("------------------------------------");
            //Console.ReadKey();

            /* Imprime as informações da conta do cliente (SAQUE)*/

            //Console.WriteLine("------------------------------------");
            //Console.WriteLine();
            //Console.WriteLine("Dados da conta do cliente");
            //Console.WriteLine();
            //Console.WriteLine($"Olá {nome}," + "\n" + "seu saque foi realizado com sucesso!" + "\n" + $"Valor sacado: {valor}" + "\n");
            //Console.WriteLine($"Agencia: {conta.Agencia}" + "\n" + $"Numero: {conta.Numero}" + "\n" + $"Saldo: {saque}");
            //Console.ReadKey();
            //Console.WriteLine("------------------------------------");
            //Console.ReadKey();

            // Aposta:
            ContaCorrente[] arr = new ContaCorrente[2];
            for (int i = 0; i < 2; i++) {
                Console.WriteLine();
                Console.WriteLine($"Digite o nome do titular da conta {i + 1}");
                var nome = Console.ReadLine();

                //Console.WriteLine($"Digite a agência da conta {i + 1}");
                //var ag = Convert.ToInt32(Console.ReadLine());
                //Console.WriteLine($"Digite o número da conta {i + 1}");
                //var num = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine($"Digite o saldo da conta {i + 1}");
                var valorConvert = Convert.ToDouble(Console.ReadLine());

                arr[i] = new ContaCorrente() {
                    Titular = nome,
                    //Agencia = ag,
                    //Numero = num,
                    Saldo = valorConvert
                };
            }
            Console.WriteLine($"Digite o valor a ser apostado");
            var valorApostaConvert = Convert.ToDouble(Console.ReadLine());

            var c = new ContaCorrente();
            c.Apostar(valorApostaConvert, arr[0], arr[1]);
        }
    }

    public class ContaCorrente {
        public string Titular;
        public int Agencia;
        public int Numero;
        public double Saldo;

        public double Sacar(double valor) {
            if (Saldo < valor) {
                Console.WriteLine($"Não foi possível concluir a transação. Seu saldo {Saldo} é inferior ao valor do saque {valor}.");
            } else {
                Saldo -= valor;
                return Saldo;
            }

            return Saldo;
        }

        public double Depositar(double valor) {
            Saldo += valor;

            return Saldo;
        }
        public bool Transferir(double valor, ContaCorrente contaDestino) {
            if (Saldo < valor) {
                Console.WriteLine($"Não foi possível concluir a transação. Seu saldo {Saldo} é inferior ao valor que deseja transferir. {Saldo}");
            }

            Saldo -= valor;
            contaDestino.Depositar(valor);
            Console.WriteLine($"Transferência realizada com sucesso! Seu saldo é de: {Saldo}");
            return true;
        }

        public void Apostar(double valor, ContaCorrente conta1, ContaCorrente conta2) {
            Random random = new Random();
            var num = random.Next(0, 1);
            Console.WriteLine($"A posição escolhida randomicamente foi a {num}");

            if (num % 2 == 0) {
                Console.WriteLine($"A conta de {conta1.Titular} ganhou a aposta de R${valor}"); 
                //conta2.Sacar(valor);
                //conta1.Depositar(valor);
                
            } else {
                Console.WriteLine($"A conta de {conta2.Titular} ganhou a aposta de R${valor}"); 
                //conta1.Sacar(valor);
                //conta2.Depositar(valor);
                
            }

        }
    }
}



