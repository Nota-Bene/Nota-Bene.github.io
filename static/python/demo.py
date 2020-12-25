def parse(input):
  tokens = input.split(" ")
  parsedTokens = []
  for token in tokens:
    if token == "":
      continue
    parsedTokens.append({
      "text": token,
      "lemma": token,
      "pos": "verb",
      "gloss": ["a test definition", "a second test definition"]
    })
  return parsedTokens
