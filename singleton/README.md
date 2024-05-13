Padrão Singleton:
O padrão Singleton é um padrão de projeto criacional que garante que uma classe tenha apenas uma instância e forneça um ponto global de acesso a essa instância.

Problema:
Às vezes, em um sistema, é necessário ter exatamente uma instância de uma classe disponível para todos os clientes. Por exemplo, em uma aplicação que precisa de um logger global ou um gerenciador de configuração único.

Solução:
O padrão Singleton resolve esse problema garantindo que uma classe tenha apenas uma instância e fornecendo um método para acessá-la globalmente. Ele geralmente implementa isso controlando a criação de instâncias, mantendo uma referência à única instância criada e fornecendo um método estático para acessá-la.

Diagrama UML:
Singleton: A classe que tem apenas uma instância. Ela controla sua própria instância e garante que só haja uma em todo o sistema.
getInstance(): Um método estático que permite acessar a instância única da classe Singleton.
<!-- Esta em imagem no arquivo singleton.png -->
