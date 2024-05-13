Padrão Command
O padrão de projeto Command é um padrão comportamental que encapsula uma solicitação como um objeto, permitindo que você parametrize clientes com operações, enfileire solicitações, log solicitações e suporte à operações desfazer.

Problema:
Às vezes, é necessário implementar operações que devem ser executadas em diferentes momentos ou em diferentes contextos, como em sistemas de filas, logs ou desfazer operações. O padrão Command ajuda a resolver esse problema encapsulando solicitações como objetos, o que permite parametrizar os clientes com diferentes solicitações, enfileirar ou registrar solicitações e suportar operações de desfazer.

Solução:
O padrão Command resolve esse problema encapsulando cada solicitação como um objeto. Esse objeto contém todas as informações necessárias para realizar a ação quando for chamado. Assim, podemos criar diferentes comandos para diferentes operações e, em seguida, armazená-los, enfileirá-los ou logá-los conforme necessário. Além disso, o padrão Command permite desfazer operações, fornecendo um método undo em cada comando.

Diagrama UML:
Command: Define uma interface para executar uma operação.
ConcreteCommand: Implementa a interface Command e mantém uma referência ao Receiver e aos parâmetros necessários para chamar os métodos do Receiver.
Receiver: Sabe como realizar as operações associadas a uma solicitação. Qualquer classe pode atuar como Receiver.
<!-- Esta em imagem no arquivo command.png -->

