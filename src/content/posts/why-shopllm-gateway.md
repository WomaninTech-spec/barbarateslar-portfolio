---
author: Barbara Teslar
pubDatetime: 2026-05-20T10:00:00Z
title: "Why I'm building shopllm-gateway"
slug: why-shopllm-gateway
featured: true
draft: false
tags:
  - llm
  - platform-engineering
  - ai-gateway
description: "How and why I started an LLM gateway project for e-commerce, and what it's teaching me about observability in augmented systems."
---

## The problem

When an e-commerce team integrates LLMs — augmented search, recommendations, customer support — they quickly run into three pain points:

1. **Costs explode** with no per-feature visibility
2. **Latency varies** depending on models and prompts
3. **Quality drifts** without anyone noticing

## My approach

`shopllm-gateway` is a single entry point that:

- routes requests to the right model (OpenAI / Mistral / local)
- traces every call (cost, tokens, latency) via Langfuse
- applies semantic caching
- exposes SLOs on response quality

## What it's teaching me

### Observability isn't optional — it's the product

With a deterministic service, you monitor availability and latency. With an LLM, you also need to monitor _what it says_. A 200ms response that confidently hallucinates a product reference is worse than a timeout. Langfuse forces you to treat every completion as a traceable artifact, not a black box.

### Cost is a feature, not a metric

Routing all traffic to GPT-4o because it "works better" is fine in a prototype. At scale, it's a budget crisis waiting to happen. Building cost visibility per feature (search vs. recommendations vs. support) changes how product teams make decisions — they start asking "is this feature worth its token spend?" That's a healthy question.

### Semantic caching is harder than it looks

Caching by exact prompt is easy. Caching by _intent_ — recognising that "red running shoes size 42" and "42 size red sneakers for running" should return the same cached result — requires embedding similarity thresholds that you have to tune empirically. Too loose: stale answers. Too tight: no cache hits.

### Fallback logic needs its own SLO

When the primary model is degraded, you fall back to a cheaper or local model. But "degraded" isn't binary. I'm learning to define a quality SLO per route so the gateway can decide autonomously when to switch — not just on HTTP 5xx, but on latency p95 or a drop in answer coherence score.

## What's next

The code is open: [github.com/WomaninTech-spec/shopllm-gateway](https://github.com/WomaninTech-spec/shopllm-gateway). Feedback welcome.
