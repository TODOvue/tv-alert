# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-11

### ✨ Added
- Initial release of TvAlert component
- Multiple alert types: `info`, `success`, `warning`, `error`
- Six position options: `top-right`, `top-center`, `top-left`, `bottom-right`, `bottom-center`, `bottom-left`
- Auto-dismiss functionality with customizable duration
- Progress bar showing remaining time
- Pause on hover feature (configurable via `pauseOnHover` option)
- Optional close button (configurable via `showClose` option)
- Stack multiple alerts in the same position with configurable max limit
- Composable API `useAlert` with programmatic methods
- Type-specific convenience methods: `alert.info()`, `alert.success()`, `alert.warning()`, `alert.error()`
- Generic `alert.open()` method with full options support
- Smooth slide-in/slide-out transitions based on position
- ARIA accessibility attributes (`aria-live`, `role`, `aria-label`)
- SSR compatibility (works with Nuxt 3 and other SSR frameworks)
- Vue 3 plugin support for global registration
- TypeScript definitions
- SCSS styling with customizable variables
- Icon slot support for custom icons per alert type
- Alert management methods: `removeAlert()`, `clearAll()`
- Reactive alerts array access
- Tree-shakeable ES module build

[1.0.0]: https://github.com/TODOvue/todovue-alert/pull/1/files
