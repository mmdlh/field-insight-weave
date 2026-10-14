<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the seven agriculture views as independent TanStack leaf routes, with the persistent navigation shell in the root layout, so each view has its own URL and metadata.
- Keep ECharts initialization inside effects with dynamic imports and dispose on cleanup; use notMerge and apply view options last to avoid stale-series merging and SSR browser API access.
- Keep dashboard data as illustrative frontend fixtures until a live-data connection is explicitly requested; controls must not imply real agricultural hardware has been connected.
- Define agriculture presentation rules and semantic palette centrally in src/styles.css to maintain consistent glass, map and chart styling.
