import grammar from "./Grammar";

const semantics  = grammar.createSemantics();

type Node = {
    sourceString: string
    eval: () => any
}
semantics.addOperation("eval", {
    AddExp_plus: (left: Node, _: any, right: Node) =>  left.eval() + right.eval(),
    AddExp_minus: (left: Node, _: any, right: Node) => left.eval() - right.eval(),
    number: (node: Node) => Number(node.sourceString)
})

export default semantics;