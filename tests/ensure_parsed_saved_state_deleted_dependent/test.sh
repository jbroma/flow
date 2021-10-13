#!/bin/bash
# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

printf "==== No errors at start====\\n"
assert_ok "$FLOW" status --no-auto-start

rm B.js

# Simulate a file watcher race condition. Let's say A.js becomes focused, but the
# file watcher has not yet noticed that B.js was removed.
assert_ok "$FLOW" force-recheck --focus A.js

printf "\\n\\n==== ensure_parsed notices that B was removed ====\\n"
# Focusing on A.js requires B.js to be checked, so ensure_parsed tries to parse
# it. But it notices it has been removed and triggers a recheck, which now knows
# B is gone. With B gone, C should error.
assert_errors "$FLOW" status --no-auto-start
