Padrão Facade:
O padrão Facade é um padrão de projeto estrutural que fornece uma interface simplificada para um conjunto de interfaces em um subsistema. Ele define uma interface de nível mais alto que facilita o uso do subsistema.

Problema:
Às vezes, um sistema pode se tornar complexo, com muitas classes e interfaces interconectadas em um subsistema. Isso pode dificultar a utilização do subsistema para clientes externos, pois eles precisam entender todas as interfaces e suas interações.

Solução:
O padrão Facade resolve esse problema fornecendo uma interface simplificada para um subsistema complexo. Ele encapsula as complexidades do subsistema e fornece uma única interface fácil de usar para os clientes externos.

Diagrama UML:
Facade: Conhece quais classes do subsistema são responsáveis por uma solicitação do cliente e delega a elas.
Subsystem1 e Subsystem2: Classes que implementam funcionalidades específicas do subsistema. Elas não sabem sobre a existência da Facade e operam de forma independente.
<!-- Esta em imagem no arquivo facade.png -->
