// Compatibility mode for rollout: restricts rules on hooklike functions and function components

export hook useHook() { }

export function useHooklikeAnnotatedFunction(): void { }

function useHooklikeInferredFunction() { return 42; }

declare export function useDeclaredHooklikeFunction(): number;

export const useAssignedHooklikeArbitraryExpression = (() => 42) as () => number;

export const useAssignedHooklikeFunctionExpression = (): number => 42;

useHook(); // Error
useHooklikeAnnotatedFunction(); // Ok
useHooklikeInferredFunction(); // Ok
useDeclaredHooklikeFunction(); // Ok
useAssignedHooklikeArbitraryExpression(); // Ok
useAssignedHooklikeFunctionExpression(); // Ok

component C() {
    useHook(); // Ok
    useHooklikeAnnotatedFunction(); // Ok
    useHooklikeInferredFunction(); // Ok
    useDeclaredHooklikeFunction(); // Ok
    useAssignedHooklikeArbitraryExpression(); // Ok
    useAssignedHooklikeFunctionExpression(); // Ok
    return 42;
}
