def parse(input):
  tokens = input.split(" ")
  parsedTokens = []
  for token in tokens:
    if token == "":
      continue
    parsedTokens.append({
      "text": token,
      "lemma": token,
      "pos": "verb"
    })
  return parsedTokens
